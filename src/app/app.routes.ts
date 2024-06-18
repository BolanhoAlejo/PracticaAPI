import { Routes } from '@angular/router';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { TranslateComponent } from './components/translate/translate.component';
import { CarComponent } from './components/car/car.component';
import { IpComponent } from './components/ip/ip.component';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { CovidComponent } from './components/covid/covid.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { QrComponent } from './components/qr/qr.component';
import { EmailComponent } from './components/email/email.component';
import { MonedaComponent } from './components/moneda/moneda.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { GoogleComponent } from './components/google/google.component';
import { CocinaComponent } from './components/cocina/cocina.component';


export const routes: Routes = [
    { path: "home", component: HomeComponent},
    { path: "noticia" , component: NoticiaComponent },
    { path: "translate" , component: TranslateComponent },
    { path: "autos" , component: CarComponent },
    { path: "ip" , component: IpComponent},
    { path: "musica" , component: MusicComponent},
    { path: "dictionary" , component: DictionaryComponent},
    { path: "covid" , component: CovidComponent },
    { path: "receta" , component: RecetasComponent },
    { path: "wp", component: WhatsappComponent},
    { path: "qr", component: QrComponent},
    { path: "email", component: EmailComponent},
    { path: "moneda", component: MonedaComponent},
    { path: "yt", component: YoutubeComponent},
    { path: "google", component: GoogleComponent},
    { path: "cocina", component: CocinaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
