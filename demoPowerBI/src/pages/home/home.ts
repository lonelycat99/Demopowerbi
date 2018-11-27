import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, service, IEmbedConfiguration, factories } from 'powerbi-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { 
  }
  // showReport() {
  //   // Report's Secured Token
  //   let accessToken = 'H4sIAAAAAAAEAB2Wtc7GjLGE7-VvHclMkVKYmdmdmek1Ozr3fj6ln2afndnZ__5jZ--4ZOU___4nsnWdkfLm5FBiruaVSfl97kwPyvoHZX41NwKaN09Ov7v7nToO4-alhRNxDyvl0oB49hB4HPtNldk-iIwW7s5VGzTIUR4r_M03cEIAoC9dUzxDc2pB50k40_qmJoYRNM_RjSfZVzj4TAbrvdyakbp6P0TZeRlRtFVSPJEj-khItlSAsuJ-RA9CekrOpsTh5J1eWlNsCatxfrpkhXQ6x8tMrQygsK8mWfDeeBkAkhKRIv3a_OdEjhoaGLUV2wWNCqDw5hfR8-ooKvVtUpKIO_Smm0wdFj975PXifeqc18ROs_rdX9ZAGhYG4LjbMv1yrMTGog8ZVE7BTGJDaXqhxs4qUArgyqoM13r62ei9KW1vq8pNNZ5WwLr5tHNs5Cwd396vKE_drZ_3osV79TcWrWz0CO_Q1Pi4vn7FU94Sq5l_IDZ90rUuexmjtX7EMnrrg4xBmDzakBNyNrYTJ9CiNjGwwEb31URDDb2HgOgk0rfp2O83PKv1clpbzJE-x1d51WRhiYUm4eHsAIS-fqjyi_piiDVvvJ3MyxW9JQcDamVZy15eyYmBoaRof5sbw0hqzIePBFfsBUev3lKF2KIe1QUyIsHlyAJ5BAzqqBH8koJVTinWPrnkVgBChWlOe7qSg2sVJuy3RPTzozu2dqNaBGgo2D0CIQ922A7nuEX_gGhkljAd4QlZyCLoWYeB-nBHKiIq5ZpP8iLEQ1jm1zYcpRwYyspgOXyrqidoPX2jdmLxscvsEOu8A8Sn0xaXt1jHpSx4gvdEZsqfM5DVEaP7xNRCcSBl1768K5YbYEhfdQfl6hRC43U5Xsb61vebVxkJofdJBkzqtsmlk0ZScoNAg6TG4K6BLF1VDB9oVk4bDkNMgnk7rZb17XNj7exXRLvZ6RTNIkMre-Ufe9ZIAz-SgsB6kPLUfjmcaIOWWTpEBANlITUjss4fAfd8Vi-wD-PfAU5c6YEr0wPOoqijl5Hod30EshtjYHx21Z_no_9CSRQxszPPAjsxAHBAUKZCgOlVCinD0odVVtK26oFTNKjLLoZZN0Tudgf_AtNESRmItIj4Wu0aM-Ti1poOpitdhP4Kio_rz2lArqlGbGn7ZO30C7Fhxr57eHFsf1tT_A2cjk4N2pFMLVxFJCkr-y3STfJgBhxO6m6lLHqVvilu9WSvhkm06Hi6JckgW1zgvi4T6dJpze6RlnARuNFn3KCuOvFu72rR1RfGyK1QfWap3omru1GkiuEgi0__nXZsXh9u5P2cR7JPMy47uoyzHO6Ui6M_R6OBbQCk1fkK8SAyvOWID5fkZNWdaJ-k8qv6vkQ6Cso-8wjZ9ltFdupvM7NuWiSB7XpRHtR5zTHRDtq-xmW82RbKQn1QD_EeIpA5YUgjeOH0k7Qgjo8P-2VLorUAf9KaHgZigM8Y0JtxZzeZU_xZWOHQtrnphaVaztJUwolcWVgvDnoauflDTPl9CgW_Da6hgVC5QUBSP6PbokJmda4JbwA_xrcyPl9cPH4YMNUzqwrxKb2D-KptybyMXn2C7EpKg4viUwxxXqbooIbS3pFd44B_5T1m8eBo1-dCwBwcXhAeOzCgp0ZhlAI1TyDVlzRgv7_pfrWDFkjj8U_XLScFQxrfXskUGdT75Y9cGD9a5f0q4ZCaF47H6jJdsoYyH0oh5mXZx0gr31PsWJav9FuB9bqtF_R9D3stSA-Hp8ZRbRfVnNu4VLfeY2A_9mH4a6RIAXOQzqTO6nHGjn7zl90oFXFx4SNUhRsGJQus_XcHSa0JQ7PTbUxyJkL_-RGMfZHg_uzOGKgyMJSH9gD0hhy34yIVNM6Zx9wDczv4E2OgV9wdSYhurqPkSHyKDF4Xm6KVELOFi6avjNekLV5UALDKr8CWjecelD3_YbYxfCEG8IodgSsSFXsbFbeSmZBsH7D-47hiByGt4fvLc97Hk1_TdkqkHXqmbatetTX2Usyisqzmw2ie95ct7Asa5R8gi1cdxZBBc1rb2dvzYjrIr1FNVCC5rhxlpMtif1xTFqit6YHpRzJELWDhiSwjwAasR3H0-H7uisojwdDMPFBZS1EeC045lXcrsz39ZVKYa3nRjpkJXu6phtyXdNlzgOairMswbJ9RBnK9Q9M95CMPLSAsSR8ThIWlFaAM5gLTX_FpYL2oCcZQavGbJVZMpnkzosPjjc3EDd-sqIlDdciht6NZWr0jyhCE5cp4JpVFDZHbHmZ4dgsLbOjy2JcX505etdkxpEMiIBwdIA2uD_RKjBFSxHSV15tdo5kP9x7IPv0awF8qshhf_6riP__86x_u967HolXv3-tjLZj7Bz2iSoScpMqYD8CjfPNhxso3JAez9Gmo-Qa64sfC-e4syVlYAAokPjvjgMb_5HVW8sPyoROiHa5oVxcwd-J33j2n3mcE6lRVz5uqYP5fvfuEfjlx0gLnLqXglx3h5q0yofaMvJqMtpVbRR_zX0IVR4oSdtZpcdvXq3imTg3hPg_6OsHBiu732r2tkkNHvXHE6bxo_ky8EU8NPaK4mtpvHWZ2N8KcvkQn8ndr5oB3Jq-2FJJFPijLs_4VdFWW722ntmBklTuIVxRVumLGV4EZyzReTj1Z3mj1yCUR3CzxvuLDwD1grsI2hyfksLm7veIn16-OW5yngtBS-49tPec__8P8rm31U8I_ys6sEdk4LXALbXJzgTM34QDzP5XXNXN2nL_qTzZY4XIUzZdtVdU_9dP5m18RQfE9wnsPiQnDRGM14_7osOlStRtP2uIBl6MH6xapjaoM-F2HuGpNv7G3SAqVVSI-VULFCQNtFrCa8SK-U9cyArXXnIPUOLtx-MgDdCbpNtZHgAksdr-r5Cu8Dokdj6ETl90mbRNSnmv59T5TASlGmHRnbp6im52aJihOPGSD3-_Q1Ag69PX-aoMakDl_mSbGmeNzSW_pbGsmcNio_TW8ZrB830jJX2MA2MGm_JcL8cyK7PlI6Ygpo8I_zu8TZvHPm8IKAaWX6eDj7f7TCUuY7YSb8UBLsmKOalyimLcKHXgDCgEOXWSVKkAPvAQaDmZA33-Y_-__AUDqLAXuCwAA';

  //   // Embed URL
  //   let embedUrl = 'https://embedded.powerbi.com/appTokenReportEmbed?reportId=7df35437-4813-4fa5-8901-becda2022159';

  //   // Report ID

  //   let embedReportId = '7df35437-4813-4fa5-8901-becda2022159';

  //   // Configuration used to describe the what and how to embed.
  //   // This object is used when calling powerbi.embed.
  //   // This also includes settings and options such as filters.
  //   // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
  //   // let config = {
  //   //   type: 'report',
  //   //   accessToken: accessToken,
  //   //   embedUrl: embedUrl,
  //   //   id: embedReportId,
  //   //   u
  //   //   settings: {

  //   //   }
  //   // };
  //   var config: IEmbedConfiguration = {
  //     type: 'report',
  //     tokenType: models.TokenType.Embed,
  //     accessToken: accessToken,
  //     embedUrl: embedUrl,
  //     id: embedReportId,
  //     permissions: models.Permissions.All,
  //     settings: {
  //       filterPaneEnabled: true,
  //       navContentPaneEnabled: true
  //     }
  //   };


  //   // Grab the reference to the div HTML element that will host the report.
  //   let reportContainer = <HTMLElement>document.getElementById('reportContainer');
  //   console.log("fefe8ikm8imk8m")
  //   console.log("fefe", reportContainer)

  //   // Embed the report and display it within the div container.
  //   let powerbi = new service.Service(factories.hpmFactory, factories.wpmpFactory, factories.routerFactory);
  //   let report = powerbi.embed(reportContainer, config);

  //   // Report.off removes a given event handler if it exists.
  //   report.off("loaded");

  //   // Report.on will add an event handler which prints to Log window.
  //   report.on("loaded", function () {
  //     console.log("Loaded");
  //   });
  // }
 
  showReport() {
    // Report’s Secured Token
    let accessToken = '7d11c602-b2e4-4c1e-b121-c3747bd4e5ab';
    
    // Embed URL
    let embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiMzg3ZGUwMGUtOWQzZS00YzE5LWIwMmEtMjVjYWRlZGU1MTQ4IiwidCI6IjkzNzkzY2VmLTM0MDAtNGJkYi04MWY0LTkyNWNjYjNhNjkyNCIsImMiOjEwfQ%3D%3D';
    
    // Report ID
    let embedReportId = '7df35437-4813-4fa5-8901-becda2022159';

    let config: IEmbedConfiguration = {
      type: 'report',
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true
      }
    };
    
    // Grab the reference to the div HTML element that will host the report.
    let reportContainer = <HTMLElement>document.getElementById('reportContainer');
    console.log("reportContainer")
    console.log(reportContainer)

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
