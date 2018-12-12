import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { HttpClient } from '@angular/common/http';
import { GetData, SendData } from '../../app/Model';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    send: SendData = new SendData;
    // send: SendData;
    data: GetData;

    constructor(public navCtrl: NavController, public http: HttpClient) {

    }
    
    GetGraph() {
        // Report's Secured Token
        let accessToken = 'H4sIAAAAAAAEAB2Wxw602A6E3-XfMhI5jTQLcs6ZHbmBJmdG991va_Zl6bjOZ7v-_WNnz3fKyj9__yHYyMwj6yL3REnffDbr4mPOlE1yAmsbS3lJXy2CkiirbxQhKHn-aunX3HLViTisfDvh3Donab_nZ4XDkCzVfLIY2qtGFek_eMVPRwqkZyEwNfW2ql9OlsxNdzon9h7GOtotpEhqNVPVsEFUN8WkncKaaeD7Zv2iNJoJnO0dAHaRGsV69ppiBhY56toYkKXRio2hA0VeN7Cqn3yw-xTXYXNRq5CTajxmBmvkdXvHxbYzbvEtzgGqu3b77sHHsJiTW8FnrhHlhGQmyVQkquguq9jz0isBZ8JHOWyoLap12UeGPRvknrYwryRDdVXn3XfoDq01GnXdqeOSsZin5Wkee6039rhQQizG4Udpyk7U04d8SauZadTtzJSBd3ZX-OLQEuecTGYVc4K761QM3sNJ_u00gebRBdH8Dub8xrakTu3FFv8s-uN5jaT5wH2T3y7sofAUqZTCH_-Lo1w6HhDl2kqPrQPW6S6t9uRHy-HlKps6yL4p_oByiMS0C1x44fiVOAagH6U3b1XwmSXC1DO8UHxQPevfy005olY1jwNgmFwNqnbpm9sDfwzaFJ3OEYtmJXNOaIyorzA1urggzK723VuHReSl8fiUAzABahfTWdYtAfdGxHRPx4-nelKcmryIyaurLMZ_r54yL4hcQmbwIos5ShwgFdCyshSoFyGND9SEJSS8nUddbOyizj7CCEQB2xSvbqZe2g3HlLrm5GfWyi17dYFWCzVpuURcrJPSXAUUSmwcvkSOBNaGXWHge0QEWGPUd6cZaGKs7C7jWvFDk6zGgbZpOSXoHK5SZeB43fnLXgaLXGFMM9BBd3A54CU1pGWv-J7_tNrza51tjo4ABIAS3FnttQI02bpvs_JNGdGD73tx9KrDbphvu8vbS0bqRULGWINou_SrAuUzYb3ofJMv38GxYd2vt1j9kCWWkUr2yg8EO1POTVYE9T3fYld9ClXReHNoJUo-jdAWEBM7AKmDuQdJe75pcq0syfn79Crhsxw6dJcxICclGUeTYLvBCntGi5nXiojcBl78UsCpDCOLzBNnj2GBI7MlUOVxrcfiD9fayjVO85aSfgTW80HhvKuV8jtZxFtm_iQee9dFywUpwHEplODDngYu64GW0kB1CQ6c7EIvs3SXLrwVjGZmOC8ZW022SNkKL8gb_ivAaQb0cRo63IXsTFdNDIRXZAsLRHLkYN6BAMTVvQ9v6Xc2zN9YWcWx6l_hZWZZosU5VHCRlYYz2vVdRQWvPrUkK7N0kdpTwvGEeXY_P9QE-0Cd9QAKOgjjyThYyAyopxp7lo3oVXklFr-IibmmByucM5byD-CPHW1q7Supz2jKHWX8uDWNsoDxGB5f-RtDhWsvD-xg1b6GR6SJYfvVvWtq5O2Bs7FA-BT3nxCOwjOJWjZ6dmJA9KcbVHrYLx4JF_B5xyTPN7XSVTODCuvzlHx3JxYL9biwoO8ehYSY0CvIgj5zi08-vOqKA6Envgr29IsNi3xzXGWkjeN8E3MRZOveEz7ZY5m0BNizHjQ87OMugIJj7moYi6sDu62qR-66kAeOEQxNiosyNRMulK5fxmX-UdZj5dwSkJ2Ir0SGx9vGsa9-0GHc3fmwYGKTD559tCvT60Bbn7tHJyZdFfqI9UEjV1awnEI-m6y6Wr1D5cNEkOllobc4HxwijVu41jTKz_ki_42hNCdIQS-WaJR8xfpDimvK3OHWrQ2pJmx43LCLT-Czk0J0D3G3bAjfQ9ewmshjruqCrUDKzQB8qP01SlYBemO-6NQ6QBWhftWhtqg1f6xr9TuAmKPpFjY55CgPM8lV3D35bLknlsMPfL524JXEEw4Gklym2ZR9bezSzUI3SpqeyQqQXC8rYEqNxE2-btPwGqE3Df2t4kZQ6CmR5I8BUPVX932f60fWPiBem07-Edca2mzs3SvMNlJxarL9Cd7DoI3wBORe7yamW7YFEzjAClh3ejBxmMWDLeZdNgLp9O5hW_u2lKfp5EIMxNHiaFd4akEC2Qxa_K7M1F7UUN5x2A7pBeV62eYpvM1DY2cdNUw_X4JVyntXQgQiG5sO3xrIcsgLg0xk4qjobJZpflanpvDyE_5GdErz6L6WxQEdTNe1_bMqnghcjeoT_qROyLSLEUPwxmPBndtl6KPlxnh0w1rFObu2cAITGik6NzWa8aDc8-9CeILTrUAWXcGzVZsTBLBEmHsZXRSEL2ZHLniyoYdlQifizGIOXGz43ITchl5i6hZjG7OeWK48dvyQGN0PIgWPtHmn0I0Ft6BpsYW8mIZdF5a1JIUv_vnz1x9ufeZ90qrnF31chPiIDRZnh-a44LVKPhcp8YjUK6UvUl97kBgsZUlrb6nL5eG9Efv9qfE2q3uddU3QCDwyxMZGXCDiKOABxLkyMVBN7ORFJb5AUj9qMXoQ1XmhzCJIZgsdaLD1G3aqz2CzkkKuth-wO_YKP0muQWFXzmo9KYObnWSzgZ9loKFvCbMW36vp4HCmROhhWenTp6M8o5QKxEVTpNBiTQ6792PckKV_gtpJsBoyGgcJroYwXRKGtmtR577COYrWTokyxw9_N_zq2q0ml5KEU8Sje09nbp8kggtyYsPhDUKvlwugUT5LkzOUoFLiETDkZg8BekTbNkIotFOB3-aZkI6JBNR5f_3zn83P_KlWJfy5zJtfR20CPC9mmoLjUwcgU2b-U3ltM2b7sVY_WWejEJ5uL8ERbFbaH-EUZviG70eCN6qMV67UNv-geHf26LzydVsAe6hX4B-Z4XBQuGEGdSRFqFDqr_K85RgQil6ULjnq2BBc5vfgBZwEkbr3PlrVlikDLAcjIH293BfHTlbUFYDtyF2_zPA6DrfPJnxVsDJqEAOUQyvSrOU-JqZkIJnU7OOtQOipyGByN8sT7dDE_4JNJ2pkITFYAkQXCLUSoi8iLn5p_mO2Bbcery6ub3wRTpzM_I89Cu9caYjDY_nlt6u6jLK98o6oJ5jrrebpwLItT2PfTWE3v_HJz4niuscTNIBr_dbJ98i64amHqetPYudneRZBmTJjporZ0WSO5mfz__4PdxLxre4LAAA=';
        // Embed URL
        let embedUrl = 'https://app.powerbi.com/dashboardEmbed?dashboardId=68c2ed53-9a66-4b1d-811e-20d8c3180766&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
        // let embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiMzg3ZGUwMGUtOWQzZS00YzE5LWIwMmEtMjVjYWRlZGU1MTQ4IiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D';
        // let embedUrl ='https://app.powerbi.com/groups/50ffda63-4985-4fdf-b052-c78cee9263ff/reports/0084b1bd-550a-4ac2-b5b1-a4227afeee98/ReportSection';
        // Report ID
        let embedReportId = '68c2ed53-9a66-4b1d-811e-20d8c3180766';

        let config: IEmbedConfiguration = {
            type: 'dashboard',
            tokenType: models.TokenType.Embed,
            accessToken: accessToken,
            embedUrl: embedUrl,
            id: embedReportId,
            permissions: models.Permissions.All,
            settings: {
                filterPaneEnabled: true,
                navContentPaneEnabled: true
            }
        };

        // Grab the reference to the div HTML element that will host the report.
        let reportContainer = <HTMLElement>document.getElementById('reportContainer');

        // Embed the report and display it within the div container.
        let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
        let report = powerbi.embed(reportContainer, config);

        // Report.off removes a given event handler if it exists.
        report.off("loaded");

        // Report.on will add an event handler which prints to Log window.
        report.on("loaded", function () {
            console.log("Loaded");
        });
    }
}
