export class Post {
    title: string;
    content: string;
    loveIts: number;
    // This prop is optional as mentioned in the exercice,
    // I use it just to display number of dontLoveIts in the template
    dontLoveIts: number;
    createdAt: Date;

    public constructor(title, content, loveIts, dontLoveIts) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.dontLoveIts = dontLoveIts;
        this.createdAt = new Date();
    }
}
