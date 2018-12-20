import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    data: any;
    constructor(public navCtrl: NavController, public http: HttpClient) {

    }

    ionViewDidLoad() {
        this.GetGraph();
    }

    GetGraph() {
        // Report's Secured Token
        let accessToken = 'H4sIAAAAAAAEAB2WtQ7sCBZE_-WlHslMI01gZmxD25mZmb3af9-ezSuqW6du_eePnTz9lOR__v7jwIIuWNczPxW2zpVVR9sCKOx44iXszR22UdG5pikVfVvuoQMjezr069tgeV7hLlSO0RBSfLBrVB85ptR8jMqdT0fofbM4Gwf1Q0IlT0MWx9NPsN9s0qZnNTkhOYTyyZkuhBF2IJ-Biaxl9nIH5V2lK7Ba3sH8-SJL0RuJPIO2MTfiF4c0R3plAVpjoPE4GRodlrm51BFtdBfWrv9E9gYRPWn08krTB_fNkuscdiUy8EosVigHvo8AkOIjAwxecFUYOV9yHECQSj0oXp2aFQhSMZNdcmH5U0meDSVYUvukRkmOP-JRGEEGk-oXjHRiNiDUwkqYSmq7meRZbchJqHlKE-H1li2WFKPUgocjW5_9ou-6XR_S8vnSorLwQJXrEo10G_hiqFmeRkd4s8xrbomg3ip4BxTwcAboPtiRDiblZdShkaJFD_2ElIpNVRLFYfWZpQ7f0Fi4lGlY-E3vWxHMNwVKryAc4w3Ek_cWx9WnvbLk2NfoPITqtehcVBtgXdDmbMlfk8nMEgq66oIgRrEG-VOuCNt03GxtBZKEt8x445frzBkpWd6_Xth0Ny2G3TwElgFsOvCqPnbux5D7QUuaIY7kweEKDepeRfQMF3FMxASqK5GrD4yaFwHnbujDdRLj4jqeR5hFMOkKT3iBWz_eAzbp1AhIg2uhCxJtReJ6HPMvFe48ZD6n4Jbm8cojAHol-bqr7sjlDl6M2aEpngVE89Vv1a167_WTrs5AFuyJQaSp5SrXKgz4j0rZzwQcMFKo4KvZdvny6gedjJR4Hm0LeVGup8HQuDVZ5kHVcAU-5wyBZnuyo9IewDqX-kq1_NFvJ3M6caTVAe8cNgM2an09io-nyUZiQd2eubuAfTuIZj8yjCSv5V4nNR_vghYgOLX2N9HREGG8G8In2sfGc-mjIDaJ0pgnnJib7zqxCGVUy4jgsxUXbpCgtZlQexdBs8INA__yKLblobLek75hg9gBChZnOtolBZVQOvk6hz9Yx7Qer3fmVdJ4PKwEX7-1OMNe027a0JniBtUa4zhy53bHCCwq5blnzzX3sSmDiWyPZH5uRV7jhXipfFKUuMnNH-qeazOfMKz0sRk2wsau0IF88sWHpOpzj1Y7s3XNQIRqazRT0qMuA4J-HqgIHf7BAfRIh0hByV-qLJ7oq2PxHdMNehYLjU0UEh8ppfX36fz4_Gz5jXxN-_buhxh3NK8TgLg_OjddYUvakum0CszMDfC9GsWtXzlr8mToERwpaG_UzJ5SfNh5-RTJkO1hMUME0AsrLwzlXiIpW0PgJvGhv3Jg148iJPfemXnAgrZN33IlQkQcgXoqSE_jf-32LefRvgc82vsb-bF5yaEouHZytO8doUIAbEU1BnVoFBwrw4m3z1-4cxxmydGsJnwZmw3OFBlHEl6S4yE3lAUnTRvfUPBWHHIrWAAi85gxzceFDdKuoRuTFPHlaRPLsin_YUj1YWEUQr48SFBf3YIL_Oxh6J4-abt1rniIKhb2SPx5LaNHRasJAdzH0ftn92tH_END4Fwm1a3QUpO98OhhIpWp4sdAxmCVFVxm-rQEQeW-eJo1dbt0iDLe2quJ-bFEAD9E6piLcw2ymEM_Vf1Cf706dR8TmvaGvEMTvxaPkqmEAz_xOg5IsKx7xacDTwKLpHtypdoTpK8EfyTTnNtp8jjjRYRZLNMopYlwz-QJuKx5J4vTrjAk8cWyyrlmnD5dosL7AOGKOF9quoCCjq0q-3M1-LSVRy01ufagACxxRa8wkMOzVQYe5D4sppj6hB-AO0dalYDpJ6JDeiznN9CMOuJ3-mPrEuPreQv8UsbLq43pW98dCnjx7IvtpVOUlThWrzwgD3IjKpIt_iTkelP0Xk6toBweIkE5p4qOdPJV9LQ8sMunBjwDqSYFwF26v-kTtUIYaEYafdkzPPXMZVb0HigQQhf6JSOEPsr1Gh337GMIhj3Kgpscsvj4YLox5q4CuHfPek5mzxhqWhQ-TEGAcSexKhPsBSFrApIwBCS96Co8UzyJQcKTHxWH1uDKN4nqJenrOl5--4xfDB9kKc-taSiUlVMNGaSmIv89qOR2e0o0I-MsNf-xr45AjnUyCjPj3hbPXNdBy09nXHELfj2832Fx10FmnZzuCnSkR-2tlv1ylgc0aN5Ysbizxvllwm5a1Zs3VOBwjeE32gtw8GBSyFfk5UZnacbXTiXUQEkk9-R7P8p4PzyZjVgSdFpebVpKp6f-toCT-6gdjR7Qn7_-cOsz75NWPL85c5rYlzF_HdU7e9023HGKKEyDzb3D32nLRNdWVhXARv5F4GVnCaYhD1j6mjl3sexl_Shujygz4ptmJJ-nrWi6fNM6rCWNV9jklRABxQ2JnWg2ea4M2_xQhYE5tcr_aJQKh05azfhmvM3IdBaY60FgXVQnDV-mck8Y2YgSZKx6gP0rj7KaH8noDvSTu4HuCdSsn7OvEmw0S1GMo5LxaA18SANyWt79tRhdydgo5eHT7ssvDJKfX58szm1TRVI4QXkBwS8LnqEZtVi4uUSa9RgqwBjmMud35Qk1FZ-peb-766n1Hp3UkeQ_nx26UQCRAvZXqL2kWm4ma6d5SayuW_Pz1k_l_PPPvzY_c12sSvBzed1H08xsSykO6JkvRC780r7-r_o01Zjsx1r8ZJtvxMbVRxDCOtMPM_qOmkFyWOV1wQGCuIAD5elqVWckCS565xchZt5g77wC2pWHmvWlnGtiVTKtty0zrafcpm4AumWJVBVUJh0CEvfiDxeO0eTAetvmK0dfSqtZCjtRDjljsyQK8nbFmx_UMZbIXsTLiByHHVLgZWp3Fq0d66drIVaHQzfPYyh8f4NvTi90YqpXXYqBG9Vq7PrRuMuIcy5hlfxDnccGilG90aRNN7O5wU0UKkiBY8t6lCjcFWaGgpQVPTgn6n_LmQeZ-rN_i108Ve84hRI7M0lMg3Gc1YGedVCiBP6Y8uQgmpKZrqRbkcxOcG7mYDCVNCx-QZWqtmX89xj__R8TkPYLwgsAAA==';
        // let accessToken = 'H4sIAAAAAAAEAB2WxQ7sSBIA_-VdvZKZVpqDmZn7ZuY242j_fXvmnodSqDIy_v5jp88wpcWf__4Baq1dAIDp5DCWFeGCkHFqxS1UiafyWRfZbfLFfaSSk2yqvn1kiGq-tWwJTV6aWuSmYvW2yMIWRbeExgOEKR5OwvER6bzIIwlihmxwQWpJMUhw51onmWY7Ums3ygFACfdxuV5ef0UvL7cL7NVnsywkSB0dgu41_hral8Ist9m5Wwm37cqWsD84ypVfQ47X1bBTjpcz9FZReqIB6bZe04Zlk6lpGHYv6YGtqWJH5qmoXkaSLL66bIMUs8VA9Oxqjlw05wB7UDaPeGEr_ZULxerZnmvKoKlWRbGFe6JJ3Jex_hSgxWU3P-xJD7MPzJp66_UgZTLRoPAYmSPdE-qI9i5TEHhRqLkp8pwhTRXBuGloC2lczjr6ScJaibjJar8u5-RuQNO5DDxaf-ailzUhVNxkB1AmTY1iiPBMLm-oNNXo1AM_xBbIhavqYYvsFz263SpBSFMn1EF7tq1ybDJwmHTtvtyDJOnNaKdyETc4A_Lxff1F-Az85Aaw303NLNvyDk7_oYvbRppZymweP5nNLvEBPoIDjcBB8ROswDa5e4zS6HJjFeEw0M5L_arSKlVF2UIsdUXz2_tNv71mvzP99n18_lyjOvAH7fXpgUk-LlOGt1bAjh0wBpe09h0IQcezqUIZhthXSA6XR2aqwrR7n8IcI9IkLEw7HI1GwEJ8QLgjdcS_wYGZuSEiE-oRvpnAdiQOPGnSXfEUWMc8m21WpEI2Su-N9sON56zN9A_UvYJKd8JXPPcP6rasHKB0w8FTlCRXU6GGC524JV0vEEi6QjXldLwP-oW6DLc40s-dxBtrV2RZE1WAIOBvJIZF6U3SBdvwzoTajuDCNM0WKgA6v28fVrEBSY0sb-dJPUCEyPHx6MgC3u13AgesqPGsHQMWVKKceTDuzivbfLptS0UYzl6aGiU3QbXxQhHmmMyUbU6ocMJu20CGlE8ACRFAtxc99ff7l5eVAVHCbd85dUNA0JOriXzbJkp-dbBA0Mp1ZJwwRX_AiK29qCxbWBzEdVYpvq30pfxKbudOAaClls7jgaOHX2i-hOeMBS4fafeqFCmgaPcz8YtobxiDEktPXW4A3OE5maW3TLFyh5BevSI0llH_MKgNr-uz5oYEXgH_YygGRgq-Tzpv8LV8LY39RiKNjhVGOAMtdirf57vobgePMtBYC9198jcbRCYYAJpEHK-osRocK5d3AXiOnKZwKI3TB4p0bSlLwccO54tJa8nYS0vznei0vHPVZSrc8KqpKyyuj3f-9nGo-RlfdYACp-hOvIXsKZ9uibTY1Z1AhNGFVSjP1HcmZAB8tb-mNDqeMKsRUvjiwCEKVmjF4LpBowIuBEANsKUoFeH4KPXarZj7YC3bgBvcBd4W-cPtOAw781RE35iuEys0MspS8gVOSzHosKt3RM5jypYuaiRefGbqk2ttnOAyKeferKnHflZuLlCFyuND_4a9_qI_6ZbjF2urPJ8CzDbYDrlk2hrBQLt53rzKtExojA0BHutWR2bTpunSn5AG7tZnmcbFwBM2oIHH4Wt-NfTOZBXi4KUF2knZkY0tebb5iE8dqxJCYRqkBm5TOtWjn_3W0vgP6nimD7tqHS1r1YgcPYpvonuQxgf1E6qGui5nspZ2L3ksmiz66bY-RjZQ95xXOKr57Z6RizWNSHkUtYpH3CmxQJOplrxSzMxUJVIuYl_E1bbP9XZSkrt5JAix8B4J-gKblq9Rv3XejthdvBhzCVNVS7QOOauiqnQmsWZ9ob8UCD5KsMwQC7RzGlWGtk7FSFpIWkI2p93D4uwmFfD7ZzwqJ1wGxAh40cSEhtNaqLw-Ra5Xe94AwEd3dAy3pUoAiBHZizncfSQVWrDgJF5aeGgaQc1IcO17Np-G1a3sMoUIzqSpRnpRBEPgQBM13Wiyb7xdoc2ktp07ZFiLViPwM7aKMSJFoqN1yOqRRTuTs6GuTn5Y-UyZqjJXUmII6Wx6zgG_9SQJGstrlftdzHIFGFY4CYdpJz_GfIkKfMb2AdtQ_HuH3jEwMvJ98SFWFvVS_LkMUOQ4GoOEEywcUkjAnDKzsDFTz-jFblrda9H5en6gTXwaQve5GinCch8eaodr-hy2T1Lffg_D0jodczEUOOcGyR9wZX0xgulFNqF8RRrQJC5tk18CmGXQeQxD5qMsrjx_GlkD56_nwHUVo1HewDzzjPnH1J4hSIsI0JfhzozyOCaj_oQWrLKxWRFYmAx7-9lUhgtb6TZ9ZUkjCHOrTDBstyA7IwmtBdNjIMc31ALQihGJi5aHVkQvX2ZZOYW0COplip--78npKnm89krnOFd___znD7c-8z5p5fPLoV2vaBypX2wbZiSVJ19HaDH-CRmFTf3ZmvE5ftfdcYLyvOfap91xR6W6iuS1GDZNZZoTVVXF54SFOI1EwaSUVnW1rards61wcF5m82-o5XleUcbUy1POLQMwmb6iGMnWgs-YHTK5-rKaqA6-CMEIlrEgnVLEcn1Ria77vbIMvfqSNcRoyGedTR_57PMiRAELa0bqd5lNiJSw_s59FRKFSGZNe6OPSTSGv_uqt3e_J-NelZt8zKRSW_QIW9yBQh0dtEu0w5c4XvjxqkyxfS87TtsmTgYLFkxJ4QdjcW62Snql_uhYJLkYq3cxHy5k_noWhihXHQRnAcmzpLHiyDHqFjwe89df_2B-5qZclfBHOSfFJxdJGltq7TFFwonGQbj-nfLa-pvux1r-xlaBnv31QImghtyfdkZ7oOVVrekXHHSHdphfeWEEuaxIZw9vHMpHMIZz4SkhdmHdERgRrryqmCaB0Uo9tvXn0t2douA2AedWUiYOFsNJ54NSb3uFWi2pwa0u236jCd61rgYqKmJnqNpxb_w1oSPT2OPbHvygi7Y8uMjt6a83acPIIPbNB_i3qBW1Gq8e6jq0nGfbfRUSHUEZ51QELcFm4tfPQd95_v0eZw8qKvcL4nxD64pmi6kTTZAlwOA6qJS2XXoniaqKkcqakI6iKIh7G6nwpwaQjS7RszkwTFkOodQ2hHU5cOgexNp1Uqgrz-SVa-DmRzEnmhM2Tc2iHni8P0_aOD_M__s_AFCmTwIMAAA=';
        // Embed URL
        // let embedUrl = 'https://app.powerbi.com/dashboardEmbed?dashboardId=68c2ed53-9a66-4b1d-811e-20d8c3180766&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
        // let embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiMzg3ZGUwMGUtOWQzZS00YzE5LWIwMmEtMjVjYWRlZGU1MTQ4IiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D';
        // let embedUrl ='https://app.powerbi.com/groups/50ffda63-4985-4fdf-b052-c78cee9263ff/reports/0084b1bd-550a-4ac2-b5b1-a4227afeee98/ReportSection';
        // Report ID
        // let embedReportId = '68c2ed53-9a66-4b1d-811e-20d8c3180766';
        let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=050e1df4-d497-4d73-a8a9-d1c50acc70d1&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
        //https://app.powerbi.com/groups/50ffda63-4985-4fdf-b052-c78cee9263ff/reports/050e1df4-d497-4d73-a8a9-d1c50acc70d1/ReportSection?filter=data/NameKad eq 'กทม1' and data/Party eq 'เพื่อไทย'
        // let embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiMzg3ZGUwMGUtOWQzZS00YzE5LWIwMmEtMjVjYWRlZGU1MTQ4IiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D';
        // let embedUrl ='https://app.powerbi.com/groups/50ffda63-4985-4fdf-b052-c78cee9263ff/reports/0084b1bd-550a-4ac2-b5b1-a4227afeee98/ReportSection';
        // Report ID
        let embedReportId = '050e1df4-d497-4d73-a8a9-d1c50acc70d1';


        const basicFilter: pbi.models.IBasicFilter = {
            $schema: "http://powerbi.com/product/schema#basic",
            target: {
                table: "data",
                column: "NameKad",

            },
            operator: "In",
            values: ['กทม2'],
            filterType: pbi.models.FilterType.BasicFilter
        }

        const basicFilter2: pbi.models.IBasicFilter = {
            $schema: "http://powerbi.com/product/schema#basic",
            target: {
                table: "data",
                column: "Party",

            },
            operator: "In",
            values: ['เพื่อไทย'],
            filterType: pbi.models.FilterType.BasicFilter
        }

      



        let config: IEmbedConfiguration = {
            type: 'report',
            tokenType: models.TokenType.Embed,
            accessToken: accessToken,
            embedUrl: embedUrl,
            id: embedReportId,
            permissions: models.Permissions.All,
            filters: [basicFilter,basicFilter2],
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
