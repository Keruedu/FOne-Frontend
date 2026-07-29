"use client";

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Choice = {
  name?: string;
  launch_url?: string;
  reason?: string;
};

type Message = {
  role: "user" | "assistant";
  text: string;
  choices?: Choice[];
};

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.2 11.3 19.1 4.8c.8-.3 1.5.4 1.2 1.2l-6.5 14.9c-.3.8-1.5.7-1.7-.2l-1.3-5.5-5.5-1.3c-.9-.2-1-1.4-.1-1.8Z" />
      <path d="m10.9 15 4.2-4.2" />
    </svg>
  );
}

function FOneMark() {
  return (
    <span className="prompt-fone-mark" aria-hidden="true">
      <span>F</span>
      <i />
    </span>
  );
}

export function WebChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const started = messages.length > 0;

  useEffect(() => {
    const container = messagesRef.current;
    if (started && container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, sending, started]);

  async function sendMessage(event?: FormEvent, overrideText?: string) {
    event?.preventDefault();
    const nextText = (overrideText ?? text).trim();
    if (!nextText || sending) return;

    setText("");
    setMessages((current) => [...current, { role: "user", text: nextText }]);
    setSending(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: nextText }),
      });
      const body = (await response.json()) as {
        message?: string;
        choices?: Choice[];
        error?: string;
      };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text:
            body.message ??
            body.error ??
            "Mình chưa nhận được câu trả lời. Bạn thử lại nhé.",
          choices: body.choices,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "Không kết nối được FOne backend. Bạn thử lại sau nhé.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function handlePromptKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className={`fone-prompt-shell${started ? " is-chatting" : ""}`}>
      <div className="prompt-grid" aria-hidden="true" />
      <div className="prompt-glow prompt-glow-left" aria-hidden="true" />
      <div className="prompt-glow prompt-glow-right" aria-hidden="true" />

      {!started ? (
        <section className="prompt-landing" aria-labelledby="prompt-title">
          <div className="prompt-badge">
            <FOneMark />
            <span>FOne AI Service Navigator</span>
          </div>
          <h1 id="prompt-title">Bạn đang tìm dịch vụ gì?</h1>
          <p>Chỉ cần mô tả nhu cầu. FOne sẽ tìm OA phù hợp ngay trên Zalo.</p>

          <form className="prompt-composer" onSubmit={sendMessage}>
            <textarea
              autoFocus
              aria-label="Mô tả dịch vụ bạn muốn tìm"
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={handlePromptKeyDown}
              placeholder="Ví dụ: Tôi muốn tìm quán lẩu ngon ở TP.HCM"
              rows={3}
            />
            <div className="prompt-composer-footer">
              <span>Enter để gửi · Shift + Enter để xuống dòng</span>
              <button
                className="prompt-send-button"
                type="submit"
                disabled={sending || !text.trim()}
                aria-label="Gửi yêu cầu"
              >
                <SendIcon />
              </button>
            </div>
          </form>

          <div className="prompt-trust-note">
            <i />
            <span>Tìm kiếm trong danh mục OA đã được kiểm chứng</span>
          </div>
        </section>
      ) : (
        <section className="prompt-conversation" aria-label="Trò chuyện với FOne">
          <header className="prompt-conversation-head">
            <div>
              <FOneMark />
              <span>
                <strong>FOne Assistant</strong>
                <small><i /> Đang sẵn sàng</small>
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMessages([]);
                setText("");
              }}
            >
              Cuộc trò chuyện mới
            </button>
          </header>

          <div className="prompt-messages" aria-live="polite" ref={messagesRef}>
            {messages.map((message, index) => (
              <article
                className={`prompt-message ${message.role}`}
                key={`${message.role}-${index}`}
              >
                {message.role === "assistant" ? <FOneMark /> : null}
                <div>
                  <p>{message.text}</p>
                  {message.choices?.map((choice) =>
                    choice.name && choice.launch_url ? (
                      <div className="prompt-choice" key={choice.launch_url}>
                        <span>
                          <strong>{choice.name}</strong>
                          {choice.reason ? <small>{choice.reason}</small> : null}
                        </span>
                        <a
                          href={choice.launch_url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Mở OA <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    ) : null,
                  )}
                </div>
              </article>
            ))}
            {sending ? (
              <article className="prompt-message assistant is-loading">
                <FOneMark />
                <div>
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            ) : null}
          </div>

          <form className="prompt-chat-composer" onSubmit={sendMessage}>
            <textarea
              aria-label="Tin nhắn"
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={handlePromptKeyDown}
              placeholder="Hỏi FOne về OA hoặc dịch vụ bạn cần..."
              rows={1}
            />
            <button
              className="prompt-send-button"
              type="submit"
              disabled={sending || !text.trim()}
              aria-label="Gửi tin nhắn"
            >
              <SendIcon />
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
