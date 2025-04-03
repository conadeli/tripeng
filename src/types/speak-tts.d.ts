declare module "speak-tts" {
  interface SpeechOptions {
    volume?: number;
    lang?: string;
    rate?: number;
    pitch?: number;
    voice?: string;
    splitSentences?: boolean;
  }

  interface SpeakOptions {
    text: string;
    queue?: boolean;
    listeners?: {
      onstart?: () => void;
      onend?: () => void;
      onerror?: (error: Error) => void;
    };
  }

  class Speech {
    init(options?: SpeechOptions): Promise<void>;
    speak(options: SpeakOptions): Promise<void>;
    setLanguage(lang: string): void;
    setRate(rate: number): void;
    setPitch(pitch: number): void;
    setVoice(voice: string): void;
    cancel(): void;
    pause(): void;
    resume(): void;
  }

  export default Speech;
}
