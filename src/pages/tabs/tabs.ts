import { Component } from "@angular/core";

import { FavoritesPage } from '../favorites/favorites'
import { LibraryPage } from "../library/library";


@Component({
    selector: 'page-tabs',
    template: `
    <!-- This could be in tabs.html file, but is simple enough to just do here;
        The tabs page will sit at the bottom and display the tabs throughout navigation to other pages, the ion-tabs element is used for accomplishing this;
        The first tab in the list will be the default loaded page, or the 'selectedIndex' property can be assigned in the ion-tabs element with a value starting from 0;
    -->

        <ion-tabs>
            <ion-tab [root]='favoritesPage' tabTitle='Favorites' tabIcon='star'></ion-tab>
            <ion-tab [root]='libraryPage' tabTitle='Library' tabIcon='book'></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {
    favoritesPage = FavoritesPage
    libraryPage = LibraryPage
}