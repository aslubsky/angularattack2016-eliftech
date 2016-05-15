import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './app.component';
import {LoggerService} from './services/logger.service';
import {GithubService} from './services/github.service';
import {ConfigService} from './services/config.service';
import {AuthService} from './services/auth.service';
import {GoogleService} from './services/google.service';
import {ToastrService} from './services/toastr.service';
import {TetherService} from "./services/tether.service";
import {HTTP_PROVIDERS} from '@angular/http';
import {NG2_UI_AUTH_PROVIDERS} from 'ng2-ui-auth';

const GOOGLE_CLIENT_ID = '616075536950-pauau0e7u0c980llqh99ftvg3sd32c61.apps.googleusercontent.com';
const GITHUB_CLIENT_ID = '54c368d51bca18a17397';
const API_SERVER = 'http://52.26.114.209:8080';

bootstrap(AppComponent, [
    LoggerService,
    GithubService,
    ConfigService,
    AuthService,
    GoogleService,
    ToastrService,
    TetherService,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    NG2_UI_AUTH_PROVIDERS({
        defaultHeaders: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        providers: {
            google: {clientId: GOOGLE_CLIENT_ID, scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/drive.file'
            ], url: API_SERVER + '/auth/google' },
            github: {clientId: GITHUB_CLIENT_ID, scope: ['user:email,repo,gist'], url: API_SERVER + '/auth/github'}
        }
    })
]);
