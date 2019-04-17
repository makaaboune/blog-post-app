
export class Post {
    id: number;
    title: string;
    content: string;
    loveIts: number;
    // This prop is optional as mentioned in the exercice,
    // I use it just to display number of dontLoveIts in the template
    dontLoveIts: number;
    createdAt: any;

    public constructor(title, content, loveIts, dontLoveIts) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.dontLoveIts = dontLoveIts;
        // Convert Date to string because we cant insert Date Object in Firebase DB
        this.createdAt = new Date().toString();
    }
}
