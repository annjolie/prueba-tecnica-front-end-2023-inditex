export interface TopPodcastType {
    feed: Feed;
}

export interface Feed {
    author:  Author;
    entry:   Entry[];
    updated: Label;
    rights:  Label;
    title:   Label;
    icon:    Label;
    link:    Link[];
    id:      Label;
}

export interface Author {
    name: Label;
    uri:  Label;
}

export interface Label {
    label: string;
}

export interface Entry {
    "im:name":        Label;
    "im:image":       IMImage[];
    summary:          Label;
    "im:price":       IMPrice;
    "im:contentType": IMContentType;
    rights?:          Label;
    title:            Label;
    link:             Link;
    id:               ID;
    "im:artist":      IMArtist;
    category:         Category;
    "im:releaseDate": IMReleaseDate;
}

export interface Category {
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
    "im:id": string;
    term:    PurpleLabel;
    scheme:  string;
    label:   PurpleLabel;
}

export enum PurpleLabel {
    HealthFitness = "Health & Fitness",
    Music = "Music",
    MusicCommentary = "Music Commentary",
    MusicHistory = "Music History",
    MusicInterviews = "Music Interviews",
}

export interface ID {
    label:      string;
    attributes: IDAttributes;
}

export interface IDAttributes {
    "im:id": string;
}

export interface IMArtist {
    label:       string;
    attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
    href: string;
}

export interface IMContentType {
    attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
    term:  FluffyLabel;
    label: FluffyLabel;
}

export enum FluffyLabel {
    Podcast = "Podcast",
}

export interface IMImage {
    label:      string;
    attributes: IMImageAttributes;
}

export interface IMImageAttributes {
    height: string;
}

export interface IMPrice {
    label:      IMPriceLabel;
    attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
    amount:   string;
    currency: Currency;
}

export enum Currency {
    Usd = "USD",
}

export enum IMPriceLabel {
    Get = "Get",
}

export interface IMReleaseDate {
    label:      Date;
    attributes: Label;
}

export interface Link {
    attributes: LinkAttributes;
}

export interface LinkAttributes {
    rel:   Rel;
    type?: Type;
    href:  string;
}

export enum Rel {
    Alternate = "alternate",
    Self = "self",
}

export enum Type {
    TextHTML = "text/html",
}
