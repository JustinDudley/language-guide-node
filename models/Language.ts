export interface Language {
    name: String;
    id: Number;
    origin: Origin;
    usedFor: String;
    explanation: String;
    starterLanguage: String;
    recommendation: String;
    emoji: String;
}

interface Origin {
    year: String;
    originStory: String;
    history: String;
}
