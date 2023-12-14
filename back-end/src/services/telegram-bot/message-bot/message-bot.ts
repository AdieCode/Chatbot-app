interface Progress {
    command: string;
    userInput: string[];
}

export function myBot(text: string, progress: Progress): [string, Progress] | [string, Progress] {
    if (checkIfCommand(text) || progress.command.length > 0) {
        return runCommand(text, CheckChatReset(text,progress));
    }

    return [
        "Please provide a command so that I can assist you:\n" + "example: /word",
        progress
    ];
}

function checkIfCommand(text: string): boolean {
    const commands: string[] = ["/start","/word","/greet"];
    return commands.includes(text);
}

function runCommand(text: string, progress: Progress): [string, Progress] | [string, Progress] {
    if ( text === "/start"){//start by bot
        const intro = "Welcome user, to interact with me give me a command.\n\n"
        +"here is my commands:\n"
        +"- /word\n"
        +"- /greet\n\n"
        
        return [intro, progress];

    }else if (text === "/word" || progress.command === "/word") {//word by bot

        if (progress.command ==="/word"){
            progress.userInput.push(text)
        }

        if (progress.userInput.length === 2 && progress.command ==="/word") {
            const newProgress: Progress = {
                command: "",
                userInput: ['']
            };
            return ["your word was : " + progress.userInput[1], newProgress];

        } else {
            const newProgress: Progress = { ...progress };
            newProgress.command = "/word";
            return ["please enter a word", newProgress];
        }


    } else if (text === "/greet" || progress.command === "/greet") { //greeting by bot
        if (progress.command ==="/greet"){
            progress.userInput.push(text)
        }

        if (progress.userInput.length === 3 && progress.command ==="/greet") {
            const awnswer = progress.userInput[2].toLowerCase()
            const newProgress: Progress = {
                command: "",
                userInput: ['']
            };
            
            const Options = ["good","bad"]
            if (Options.includes(awnswer)){
                if (awnswer == "good"){
                    return ["I'm happy to hear your feeling good today", newProgress];
                }
                return ["I'm sorry to hear your feeling bad", newProgress];
            }else{
                progress.userInput.splice(2,1)
                return ["please only enter (good/bad)", progress];
            }

        } else if (progress.userInput.length === 2 && progress.command ==="/greet") {

            if (text.split(" ").length===1){
                return ["Hi " + progress.userInput[1] + " how are you (good/bad)", progress];
            }else{
                progress.userInput.splice(1,1)
                return ["please enter only a name", progress];
            }

        } else {
            const newProgress: Progress = { ...progress };
            newProgress.command = "/greet";
            return ["please enter your name", newProgress];
        }
    }

    // Return a default value if conditions above are not met
    return ["", progress];
}


function CheckChatReset( text:string, progress: Progress ){
    if (text !== progress.command && checkIfCommand(text)){
        const newProgress: Progress = {
            command: "",
            userInput: ['']
        };
        return newProgress
    }
    return progress
}