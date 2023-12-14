interface Progress {
    command: string;
    userInput: string[];
}
export declare function myBot(text: string, progress: Progress): [string, Progress] | [string, Progress];
export {};
