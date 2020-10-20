import { Character } from './characters';
export interface AllCharacters {
    'info': {
        'count': number,
        'pages': number,
        'next': string,
        'prev': string
    };
    'results': Character[];
}
