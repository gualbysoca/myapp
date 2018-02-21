import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { ModalController } from 'ionic-angular';
import { SearchListPage } from '../search-list/search-list';


@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {
  public isSearchbarOpnened=false;
  searchQuery: string = '';
  invitedList: Array<any> = [];
  friendList: Array<any>;
  contactos: Array<any> = [
    {
        "name": "Nicolas Roncal",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20994203_10155588574754085_3232889788827753712_n.jpg?oh=cf5a7578ca80d5a98fe880157d01219b&oe=5B008870",
            "width": 50
          }
        },
        "id": "AaKkkapif8YoboGX4cUGQstBIlMmNuoPTUiGshgPy7kmopYHA1xcEZ9F0xe8G0Pb68lQ0HOcH58WOIGbUXqCAPhpj2K-3wWpXX7n9_ckdGP0rA"
      },
      {
        "name": "Ana Mariela Martínez Murillo",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.50.50/p50x50/10150769_10153465121361002_6374526992491893567_n.jpg?oh=93e4565a4e5251717d7340e0dc06fec2&oe=5B18A1FF",
            "width": 50
          }
        },
        "id": "AaLFcfBal8FIHNBvQ-WPlTAYpfjHxgvJEbSU2Oy1kzxxF-7EPyC2vKuExfiL8CLXQ6xQ9dNbyWcMNtC02PfVQLk-papk5qv7ZVQ_5_a3_MWovw"
      },
      {
        "name": "Escarlet Avila",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27540579_10156031921681870_5335005683831404154_n.jpg?oh=7e067df08d2df719fb513dbe74aa84be&oe=5B0C551A",
            "width": 50
          }
        },
        "id": "AaIbloyAtCZNDwaqlmA8uEPR9aeINr_fHWX6mZNnSvgMcE9usAaSzsGv3Zmo6FCvZ7g_ktVPejGLdYtQ2k2VcwfeMHFEKvMoM1249cBSfsefRQ"
      },
      {
        "name": "Carlos Max Rodríguez Martínez",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/23519057_10155115803424290_8013134897876616895_n.jpg?oh=3efc03fbbc9fdc544761c2383a3035c8&oe=5B264605",
            "width": 50
          }
        },
        "id": "AaL02s2686JGfDi9Tc8_cLxYCA9jLOO3lxcuWdIXqTjGym9CeUEpp16aDQXIGkLg7XvJ1BPKR8ygseuBJ_BphRVkUMeytfafew80whM5H13ZPQ"
      },
      {
        "name": "Carlos Alberto Burgos Gutierrez",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14962700_10157453961265467_3696825271882100077_n.jpg?oh=32963ee4107709c71e4746f6b58bf729&oe=5B04965A",
            "width": 50
          }
        },
        "id": "AaIe42RuNEZkNnzJmWzYwhS_QvCb5nATRZ8FQqrdQnpvokcagQor_THRA2NnEM3ahm-soytq2YCxvgVPGP0eChlstFKfNTBSoEU5W1y0A0ozfQ"
      },
      {
        "name": "Sergio Martinez Murillo",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.50.50/p50x50/24899970_10155734314591542_179457429018729597_n.jpg?oh=640b1f8d1a8477db092399b4432afe0e&oe=5B0D6401",
            "width": 50
          }
        },
        "id": "AaJ1zTnGQpdm23zyBaV4dFV-oUjPSHSYzFnwi0iokE22uqj12wGrUYWzuJKHBZ1VDO42kltb0uzUjf7I5n3JG6ZP8POqLdYBd7yvRNBR6iWkew"
      },
      {
        "name": "Alex Orgazmic",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c66.66.828.828/s50x50/63093_10151906090415110_949745654_n.jpg?oh=7ffb9e4dcbbf29cc28fd69340bf612f8&oe=5B10FD20",
            "width": 50
          }
        },
        "id": "AaIcFkalBLZjLkap1MA5Ja0KEqRbCe9Ce1OiJUScuQEwzgPZwCMLb4lEO3VPGL48uEGwsBtHBhIeqjhr6xpkYUmk9hO5uHoHSPaW3LW2n_XXBQ"
      },
      {
        "name": "Carla Lisset Rodríguez Claure",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12931176_10154062932449938_3052519997553918447_n.jpg?oh=0de510d634892c117369d8f79e171b4e&oe=5B0F3446",
            "width": 50
          }
        },
        "id": "AaIgJ0j8dqUmfnyu8mT0OMxXopiy0Ue5IHt5D4U8pqlzfEIUm3ThFVabucq7bULaZq6SNVh6j7t7EzXxTS4Qqoxy7JCu5n8GpLsH8ZNK3XZNmA"
      },
      {
        "name": "Franz Bustillo Guzmán",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/23319169_10154929251037327_6680367627169519359_n.jpg?oh=60bb5186c62c8bc210eb0517bc40b7df&oe=5B22D554",
            "width": 50
          }
        },
        "id": "AaKExMPJKqNtTXUWSKKm1MQB8LuxoXT-TZ1dVm2V_iDE4g5vpofzGAIw37-ZEQWUbgsZsKDEq54IVxha2g8ojv6M1nCh95VeSmrtW7AUUjnSEg"
      },
      {
        "name": "Carlos Anibarro",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/16708421_10154935967110883_9173979003669004957_n.jpg?oh=3dd4f025d6ba4702329af5cc420dbe49&oe=5B154C68",
            "width": 50
          }
        },
        "id": "AaKSVQRSqZNqX6is2Kk91XZ3RIKc6MmDZyYfefj1uaCEwmbYrUnFCLs4CWGHTBuZlgRjIF5YHQrcKDcR_IQJN0-yzF5GD3VOJxXPXWkEzV81NA"
      },
      {
        "name": "Harumi Yoshida",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c107.268.424.424/s50x50/26993670_10159820746835696_6078649956369066012_n.jpg?oh=235d21b3573bf43a97ea938f0a204df9&oe=5B231EB4",
            "width": 50
          }
        },
        "id": "AaJIYkOE6Ppbm8dLKtLE3y9WZaL5qMUlnBYMvhDTN1H6sl8bjEpBLwLoWweqo5p6sRVNe_Li_q_KBDRMPtkzvW4FQhBxALBFYXiQ4TSBkB3yzQ"
      },
      {
        "name": "Juan Pablo",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20140095_10154613988426791_4564045245803636571_n.jpg?oh=28c5cc1dda764a8cd89278ccc000ad42&oe=5B054AE4",
            "width": 50
          }
        },
        "id": "AaLXwF7sLjRuhc_YLbm6w9kqKr_e4ldToZ5AJH2QjEYKCFQ0pCF5wWRU-f66-avHnnd-sntqUSvWiW4t3Hj8KEODd9OUmdTOyYkGDMI5Nzc_1g"
      },
      {
        "name": "Bicho Burgos",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10006964_10156079591210005_6206729751182260348_n.jpg?oh=1372de74c1c93033d8416709dfe30e50&oe=5B0F29B2",
            "width": 50
          }
        },
        "id": "AaKIUbY0VL46lGzEPcZnCayhTGFy8CqHYqPB7F6B3FZxa6jByMwqBcyX0UlddRlL3MT_ckkX2V_Y5q1tVYj_XKZvcX2PE1mj2cB8sGZf3ZehjA"
      },
      {
        "name": "Elizabeth Lora",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/26904720_10160044506325096_7036717010252268471_n.jpg?oh=4ed24f458ca892900e700afd1002806f&oe=5B1695DF",
            "width": 50
          }
        },
        "id": "AaKD9v9zjdrKbmQCw-4E2Bs9vhBLuUJ-cwaRedGSn8Yqj_sRIFHQnzWavRYr2e3_kOILv08Jjm49sV2nHOS1EuR-Y5ivNgqBBohRM0cgSQWqBA"
      },
      {
        "name": "Cintya Olivera Montes",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22491516_10156360267640476_2298740611759637166_n.jpg?oh=040538450cf04e0ccd5d25f760926356&oe=5B04855A",
            "width": 50
          }
        },
        "id": "AaJ2egn6LwAhFoQ_oON9KG5J7ux6tNq0aBiSQKp1MpKlTX8GKBtZKEjeLWKLaLnV93WjpxVvutOjmEjR0mT7aKmgnC-jDtBqO-2UiOF09TxS5A"
      },
      {
        "name": "Edgar Marcelo Zavala Gutierrez",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20108132_10155003462378440_1275991905693970020_n.jpg?oh=03eb11394e7c44846a0ff0c4623d0368&oe=5B0F9C8B",
            "width": 50
          }
        },
        "id": "AaJBPUWBbebmXhSBrj82LHvxdmKpTCesLhjWRAvq1b-xCibJXpew0hnyhOQtgfh9d9aICxOzJiYIjvlZPrkP-672I9-OB5_LtJx_dKZhyQZADQ"
      },
      {
        "name": "Alejandra Zavala Gutiérrez",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/23472843_10154767720192504_9117170803859175021_n.jpg?oh=505568d6e5952971fefbe9df5374710e&oe=5B128183",
            "width": 50
          }
        },
        "id": "AaIY6wtQYqKs7Fb2a1qAtRFmG4mpaVcIWAWuzsnlqHBRD15HusMphXaHFkz4SkEv1EjOF6Mr4b5z030OEhsBcVe8aAKlmCatdGGXBpfeKPWxrA"
      },
      {
        "name": "Cecilia Lopez",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/23518986_10155395413593052_6156624868218942962_n.jpg?oh=c71542ff2ef849af064cb722238a0bae&oe=5B063927",
            "width": 50
          }
        },
        "id": "AaLq0KFy_eMUGz0im9RXEA9OInlYNCZMJxPwruZeuZHe6w9H_YOAo3icTSLyJmxGBOlHc43XslSSBdChhMhdQbi32dHHaNJua5C86xU24WBDnA"
      },
      {
        "name": "Gaby Cardozo",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10940442_10153031526249105_3015841909252200834_n.jpg?oh=97c28ed650312e2e52a62c4bbefc5440&oe=5B1E2F80",
            "width": 50
          }
        },
        "id": "AaI6HPynJqqfC2gPUkhehp1iB3S7bVrfI_atbJbcl_IdGY9Aism2ypeyJJ_RtW4C4_KrdSua3RWPPMGoUIZkudjCN2CMxzNUIU1G0I6Uph8EDA"
      },
      {
        "name": "Paola Cruz",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c2.0.50.50/p50x50/309005_10150357994320135_1629082527_n.jpg?oh=87ec41f8ae47ee0ae79ab814fbb1a2e4&oe=5B0E9262",
            "width": 50
          }
        },
        "id": "AaKazW6vBc4ffHNh_njpc3ggfWlYUkUQUfI76h0n6A-86Eji2t7rYRhtdCtsUliSKb7yFh5dtdm7YYl8m_SBB_U40sTr_1ShQLW8cw5NZvK_WA"
      },
      {
        "name": "Gustavo Dehne",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20992632_10154641752786556_5161863157935464595_n.jpg?oh=3d06082fc92d408855b5695060c646e0&oe=5B1B5DDA",
            "width": 50
          }
        },
        "id": "AaLJdFx_dHOtPya4OOuEvTfoKZdKR0UvVDjbGG2s35InjSvRrXsaY-irFo1rZppmFSxZI7mkL6dAJ1xabQNpQ6RQtDOWrTXWMrBlcEBU2HPy7g"
      },
      {
        "name": "Guillermo Zambrana Aldunate",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10298744_10152356346605306_3306683833330936303_n.jpg?oh=628a4b31b2caa4e9b9aa94b0c312b0e0&oe=5B0741AC",
            "width": 50
          }
        },
        "id": "AaI3FgmaKAG-1Wv0ttPL7GCEXrDAHAoKBPme7-gYLEetrDX__UFKhYvrzEgYGalJzFUsjkQPkqn0RngIBeIhzIzqOYBaClp723GxCb7RCkTx2A"
      },
      {
        "name": "Beatriz Murillo",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22448392_10156061301817494_8576736523749181647_n.jpg?oh=54ca1a044bb2cbb26f58d81363d8bf6a&oe=5B1C03AB",
            "width": 50
          }
        },
        "id": "AaIG2mbL52B-RK7uLAxd0kMKZ0hy_U1QZAVjvY6ALqSP3iK2fDNvxaM8h7BrOA2o5rUXBL9L8PP5r1S5-ByDSxW8fXS0BWM-Zz1vlmO4-wWEcw"
      },
      {
        "name": "Javier Cossio Coca",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c94.33.416.416/s50x50/1630_45950566791_3795_n.jpg?oh=7cf159d6a2ec9ef590ff576d246d93f9&oe=5B22C173",
            "width": 50
          }
        },
        "id": "AaI73_QsaTGb_uCjHbp9dj8kJZW9IMaIM6TZsTF5WX_dMcQAYz_UemwM5KcDD5-vfRY9sgYF-gukSRG-P-f8HPwsLfP5sIqoTaUAQjq_kWDzxg"
      },
      {
        "name": "Verito Herbas",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27545462_10159949392225173_768393413628486049_n.jpg?oh=df46d17cf0d8b720827742e5f9d12fe4&oe=5B17A6E4",
            "width": 50
          }
        },
        "id": "AaK0SwfobMvc0Ch5zchj6t04H5xYHc0V4k78t3r9LuIadZJpOfxctSkbJ2pfLgD_Dcd_p83TYW3I35euy8LTMUKf7BgzvLwqjwQDKnEO5Kb70A"
      },
      {
        "name": "Carlos Terán",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12974487_10156956754320713_5778255572305312887_n.jpg?oh=19ee754dad7c8a4e20f696df93bafc17&oe=5B2195D5",
            "width": 50
          }
        },
        "id": "AaLdM-YqXInwRShJcbIpeY8pvF0pYD5Bfaoy-jrWNN8BYW-bn97YjD4MPVA8jCE9CFIyQLkT0pUr3oeqMKp_I-bgFG_04sTRjGXNI3QDFTkylA"
      },
      {
        "name": "Gina Cornejo Bortolini",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/26166671_10160108091605122_96861668793736636_n.jpg?oh=1a2b646647388cde247928b2086a1bfd&oe=5B22C22B",
            "width": 50
          }
        },
        "id": "AaLI_Zg36I0-Z_GhRBzyC2ZlTW9aMH-mlTjScYr3T7VM7IdiaODOJTa6g6S073aOfHhs4aCEIz-y5FBn_SWXSGDh08XoFvcw2ulW8wO1s02tSQ"
      },
      {
        "name": "Roberto Zavala",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/c0.0.50.50/p50x50/1377605_10154897129600710_8804960132256837374_n.jpg?oh=1ee007634d3cbaa610c0207209023f39&oe=5B10846C",
            "width": 50
          }
        },
        "id": "AaJJ4Rekslpqah1JIsqgzbwTQbWenlQsai_22trYYQUuwhOxgR4MHQcVykowHh28cw0Rb_z5vTd8eNKa2z6CM7iFnbESQprtSSHbP6HPedGHaw"
      },
      {
        "name": "Horacio Gutierrez",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27459847_10154976569356207_167847419320560690_n.jpg?oh=17fd06a19adfda07466dbaee04c285f2&oe=5B04B20C",
            "width": 50
          }
        },
        "id": "AaKqRxiQgNPajD8WeplZ8XCt89h3cRAqZ2Zf8is446is4Uoiuvnc-LjsHHM8fYJ-QoBN9CZWTTmSfkIQraOxQwfrQnloWnVN0AHSrKi1DTh-gw"
      },
      {
        "name": "Bianca Pozo Salamanca",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27545490_10159978212100181_490883501092111252_n.jpg?oh=902976021d2d0fbdda82e22fc1d4c18e&oe=5B129A48",
            "width": 50
          }
        },
        "id": "AaKhkh0FHIQ4uTKn6CgyvD5F_Sw9U4P6pxV0TWNv_Y4ZCDdyUiW7fGpu55CXkYhSulVXT-VGpaECz5_6sqfcG8RVBVhR4WrdtFy2et7c2_0yHA"
      },
      {
        "name": "Beatriz Gutierrez Hoyos",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/25289750_10160276681750725_6618691619166581454_n.jpg?oh=dc592fd355a1d69334654ae59a83becb&oe=5B19BD19",
            "width": 50
          }
        },
        "id": "AaKshak_ydJjqY4vP9i5w7WSYboMjOGXVp3y_n9Agjj6P23ByqyrcvIr8f6Y0Ovu582Vhrhh_YDpw-2I-R74Ga36G_AlUYGFQsnPwa6w1KEfxQ"
      },
      {
        "name": "Maggie Conchari Roca",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/20915395_10159284489890002_4925726125737071564_n.jpg?oh=dce11cb2233d06bc3715accb1948d922&oe=5B01605D",
            "width": 50
          }
        },
        "id": "AaKQbAdFsQbLjJWsBf4H_47S_onNsPFmN2tbb1fHpy5TlWvk9QA2LTf_K3yS8Jr4VST87-QEi82LPCsnmGU6mH8tEzZGutAy7D7QEEqd521bAQ"
      },
      {
        "name": "Juan Gabriel Garnica Iriarte",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/18011136_10154438352356016_7409023315347069511_n.jpg?oh=be5258f212678837940a241cbcb8aba0&oe=5B10C742",
            "width": 50
          }
        },
        "id": "AaJ3WqWJc0sHkpHSGMlgg-hX6NJ1Qhnka8FOEZGTagAokU7OPKe8lDmz81JgGqrMJw63q-lMGZLK4CS_wfVCHdJXwB9DixjdwwUnxJYhKIznnw"
      },
      {
        "name": "Veronica Roncal",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/26047084_10154850575417282_8586898370862042730_n.jpg?oh=543776fb518d35cf7efb17ee4716e111&oe=5B19D7E9",
            "width": 50
          }
        },
        "id": "AaIqVcPsQHLLZ6lZHvdwLhG0OCFsbxSK0eSMjDKJNoOvSiaJQTpXawx62OhRSFweSzGmDXtb3yjK2s9PoSAwQjdCKNueTp_NOd2XX409P4nxAw"
      },
      {
        "name": "AyLin E Pe",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/26733572_10156231697946189_715897245523739511_n.jpg?oh=091e2f7e30607102f41b6e820f2c88ce&oe=5B127F23",
            "width": 50
          }
        },
        "id": "AaIjzmIwhNO-MsfI7Hu4De9GCW5poXJRjmQv4iCE8cUxk6RO1rE6rUC8BN9CjHLWElJ-FjuVIXnvK7e_zT_m0UfnNKhpleTpt07uUTcozVa-ng"
      },
      {
        "name": "Paolo Alejandro Issa Garces",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/27858081_10213444434397673_1528811928270678602_n.jpg?oh=9f193e1cb15be161c301691fdbf690c7&oe=5B23B3D1",
            "width": 50
          }
        },
        "id": "AaJ0VDm9Nk1rE3kLKbhWnyv1LyRt8X0GOmVkVHvg0Y3G3A6_yXdtIIsI4crEISQ176ppGmU-Yz0zbFQhtkPsEAfqRPToG3xgiYAkCbtUTMCYfg"
      },
      {
        "name": "Pablo Herbas Campos",
        "picture": {
          "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/21462220_10159269120805612_7505363952856900167_n.jpg?oh=d1dceaafdc83adac18c077c52cf1362d&oe=5B156234",
            "width": 50
          }
        },
        "id": "AaI-ThC96E5yfv82khiQvdSUWBvAuvDVYgeI4k3I-spwTnhHkOceTf5vpAGn2N7qmZpASI5LKhJb8GUHrD55c3ZCgigwtDhCAEi0PinVVAQ--g"
      }
];

  constructor(public navCtrl: NavController, 
              //public navParams: NavParams, 
              public modalCtrl: ModalController,
              public facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
    //alert("llego a invite")
    this.loadFriendList();
  }

  loadFriendList(){
    console.log("entra...");
    /*this.facebook.getLoginStatus().then((success)=>{
      if(success.status == 'connected'){
        //alert("entro!");
        this.facebook.api('me/taggable_friends?fields=id,name,picture&accesss_token=' + success.authResponse.accesssToken, null).then((resp) => {
          alert(resp);
          //alert(JSON.stringify(resp));
          this.friendList = resp.data;
        });
      }else{
        alert("usuario no logeado.");
      }
    });*/
    this.friendList = this.contactos;

  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.loadFriendList();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      //alert("entra al search...")
      this.friendList = this.friendList.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  updateList(friend){
    console.log("nuevo");
    var index = this.invitedList.indexOf(friend);
    if(index < 0){
      this.invitedList.push(friend);
      console.log("usuario ya invitado!" + this.invitedList.indexOf(friend));
    } else {
      this.invitedList.splice(index, 1);
    }
  }

  presentModal() {
    let modal = this.modalCtrl.create(SearchListPage, { data: this.invitedList});
    modal.present();
    modal.onDidDismiss(data => {
      this.invitedList = data;
    })
  }

}
