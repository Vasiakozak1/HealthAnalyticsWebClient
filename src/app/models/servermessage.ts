export class ServerMessage {
    public title: string;
    public subtitle: string;
    public text: string;
    public messageType: MessageType;
}

export enum MessageType {
    Dialog = 1,
    Toast = 2
}
