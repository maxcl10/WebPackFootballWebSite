import { Injectable } from '@angular/core';

@Injectable()
export class LogoService {

    public getLogoPath(team: string, size: number) {
        let baseUrl = '../../../assets/img/logos/';
        switch (team) {
            case 'Bennwihr F.C.':
                return baseUrl + 'bennwhir/bennwhir_' + size + 'x' + size + '.png';
            case 'Blotzheim A.S.':
                return baseUrl + 'Blotzheim/Blotzheim_' + size + 'x' + size + '.png';
            case 'Berrwiller F.C.':
                return baseUrl + 'berrwiller/berrwiller_' + size + 'x' + size + '.png';
            case 'Grandvillars F.C.':
                return baseUrl + 'Grandvillars/Grandvillars_' + size + 'x' + size + '.png';
            case 'Cernay S.C.':
                return baseUrl + 'cernay/cernay_' + size + 'x' + size + '.png';
            case 'Uffheim F.C.':
                return baseUrl + 'uffheim/uffheim_' + size + 'x' + size + '.png';
            case 'Hagenthal-Wentwiller F.C.':
            case 'Hagenthal-Wentzwill':
            case 'Hagenthal Wentzwill.':
                return baseUrl + 'hagenthal/hagenthal_' + size + 'x' + size + '.png';
            case 'Hirtzbach F.C.':
                return baseUrl + 'hirtzbach/hirtzbach_' + size + 'x' + size + '.png';
            case 'Illzach A.S.I.M. 2':
                return baseUrl + 'illzach/illzach_' + size + 'x' + size + '.png';
            case 'Illhaeusern F.C.':
                return baseUrl + 'illhaeusern/illhaeusern_' + size + 'x' + size + '.png';
            case 'Kingersheim F.C.':
                return baseUrl + 'kingersheim/kingersheim_' + size + 'x' + size + '.png';
            case 'Sierentz F.C.':
                return baseUrl + 'Sierentz/Sierentz_' + size + 'x' + size + '.png';
            case 'Koetzingue A.S.L.':
                return baseUrl + 'Koetzingue/Koetzingue_' + size + 'x' + size + '.png';
            case 'Sundhoffen A.S.':
                return baseUrl + 'sundhoffen/sundhoffen_' + size + 'x' + size + '.png';
            case 'St Louis Neuweg F.C. 2':
            case 'Saint-Louis Neuweg F.C. 2':
                return baseUrl + 'saint-louis/saint_louis_' + size + 'x' + size + '.png';
            case 'Racing H.W. 96':
                return baseUrl + 'Holtzwihr/Holtzwihr_' + size + 'x' + size + '.png';
            case 'Wittenheim U.S.':
                return baseUrl + 'Wittenheim/Wittenheim_' + size + 'x' + size + '.png';
            case 'Colmar S.R.':
                return baseUrl + 'colmar/colmar_' + size + 'x' + size + '.png';
            case 'Pfastatt F.C.':
                return baseUrl + 'pfastatt/pfastatt_' + size + 'x' + size + '.png';
            case 'Kappelen F.C.':
                return baseUrl + 'kappelen/kappelen_' + size + 'x' + size + '.png';
            case 'Hegenheim F.C.':
                return baseUrl + 'hegenheim/hegenheim_' + size + 'x' + size + '.png';
            case 'Riedisheim F.C.':
                return baseUrl + 'Riedisheim/Riedisheim_' + size + 'x' + size + '.png';
            case 'Burnhaupt Le Ht F.C.':
                return baseUrl + 'Burnhaupt/burnhaupt-le-Haut_' + size + 'x' + size + '.png';
            case 'Tagsdorf F.C. ':
                return baseUrl + 'tagsdorf/tagsdorf_' + size + 'x' + size + '.png';
            case 'Bartenheim F.C.':
                return baseUrl + 'bartenheim/bartenheim_' + size + 'x' + size + '.png';
            case 'Us Azzurri Mulhouse':
            case 'Azzurri Mulhouse U.S.':
            case 'Azzurri Mulhouse U.S':
                return baseUrl + 'azzuri/azzuri_' + size + 'x' + size + '.png';
            case 'Huningue F.C':
            case 'Huningue A.S.':
                return baseUrl + 'huningue/huningue_' + size + 'x' + size + '.png';
                  case 'Kembs F.C.':
                return baseUrl + 'kembs/kembs_' + size + 'x' + size + '.png';
                case 'Mulhouse R.C':
                case 'Mulhouse R.C.':
                return baseUrl + 'racing_mulhouse/racing_mulhouse_' + size + 'x' + size + '.png';   
                 case 'Ballersdorf F.C.':
                return baseUrl + 'ballersdorf/ballersdorf_' + size + 'x' + size + '.png';        
                 case 'Bantzenheim F.C.':
                return baseUrl + 'bantzenheim/bantzenheim_' + size + 'x' + size + '.png';         
                 case 'Mulhouse Bourtzwiller C.S.':
                   case 'Mulhouse Bourtz C.S.':
                return baseUrl + 'bourtzwiller/bourtzwiller_' + size + 'x' + size + '.png';         
                 case 'Hirsingue U.S.':
                return baseUrl + 'hirsingue/hirsingue_' + size + 'x' + size + '.png';         
                 case 'Mulhouse Real C.F.':
                return baseUrl + 'real_mulhouse/realmulhouse_' + size + 'x' + size + '.png'; 
                case 'Merxheim F.C.':
                return baseUrl + 'merxheim/merxheim_' + size + 'x' + size + '.png'; 
                case 'Altkirch F.C.':
                return baseUrl + 'Altkirch/Altkirch_' + size + 'x' + size + '.png'; 
                case 'Hagenbach EHB2016':
                return baseUrl + 'Hagenbach/Hagenbach_' + size + 'x' + size + '.png'; 
                 case 'Helfrantzkirch ASCCO ':
                return baseUrl + 'helfrantzkirch/helfrantzkirch_' + size + 'x' + size + '.png'; 
                            default:
                break;
        }
    }
}
