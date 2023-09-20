import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';


  cards: any[] = [
    {
      imagen: "data:image/jpeg;base64,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",
      descripcion: 'Por aquel entonces, nuestro amigo bigotudo se hacía llamar “Jumpman“, pero cuando su fama llegó hasta los Estados Unidos, algunos de los trabajadores del almacén que tenía Nintendo en Washington empezaron a llamarlo Mario, todo porque les recordaba al dueño de los almacenes, Mario Segale.',
    },
    {
      imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRQXGBcXGhsaGxsaGxcaHhodGhsaGhogGxobICwkHR0pIBsaJTYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHRISHjIpIik0MjQyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAQoAvQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEHAAj/xABMEAACAQIEAwUDCQQGCAUFAAABAhEAAwQSITEFQVEGEyJhcYGRoQcUIzJCUrHB8DPR4fEVJGJzs9IlNFN0gpKTshZUcqLCQ0SDlKP/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAKhEAAgICAgEDAwMFAAAAAAAAAAECEQMhEjFBBFFhEyJxMjNCgZGhsfD/2gAMAwEAAhEDEQA/AN5iLyjxQJOmuuvPQ7ClmIxjGAFXf7OtW301I3gws6E+sc6Lu4REtZswDnURG55R7PfXnIps6i4xoW4FXuXEUydTrr6mfSthevZSFA0jf0rNcLsXC4lipMsDoCSfq5vKR8auvY9jd8R0XUDXWDBHvBp+OfCDrtgZofUnS8I1JEgUuxKSQQf513C4vvEkHWT7KItpO+hrRlks1JGRJweyrDoQdN6jj7xggAknSBV1y4FEz76z3GMY2U5dNfOT6Hy9elLcljjxTGY4OcrE+LxKm5Dlo58zv7wRH4e1taVza7pQGEq0sPEM2oHTSAD7aTJw93AJHjMD7UyxJluunTT11jVdn7qi2FJAYHXaTpzooR5eas1ZmlG1uhJxDBm3aK/azZmMAaHQAHcjyrEY0a76j0/Rr0/tDhS8BTLEbCZ330rzTitgq7A/ZJB569P40UYuMqLxz5QsFF0kedcVp16R/CaCM70wt4YBUYtoee42BI9kit8EZ5scPwdhYW/mUq5iAZaddx7KswGJyQNv40pw95jpOg1q03JNPgnWzNkavRpkNXWz8KB4cTkGbbl8Kdrbt5AQYbmDz8wfypogJw7AjQ6wJnrzq7LQCGNRTKzBE0NUVdlb2uddQUVlqh0g1ZZ8jkGQYNfV8LZieUxX01ZCK2A5aZzaEbQdNvXzqFjDqGHhbQHfQk+n650FicZctsRt0/HT+NV2uKXJzQrTm0ykAc5BHrXl7j5Or9OVa6DtUbvCCBEMvIyIJkadDSk2S1wsAebSTtrrz11PtNDDF3ncBnJk+Q0HKeQ/WtC3bzJcYjQmRrrodgfcKl6o0Qwtedj/AIVxTxkMQqsdzOmkc6arjxMgiJiayl29bfLlQrlGomJaJLfrU004VYJbI8iQDAmTIkelFUtKLE5Mcf1MaXmkkanmI6frSleJViwAMyY8RiT0nlT+4FTKR4YJknlof1HnSvGXxdbSADorEwNd+frrFN+nXb2Jxz9loFYoSbX1dTPTONAQ2+wAGtK3u90dzmU8iZ9/3T7607WVuIVAV8vMddpnr50Pd4SEUuQS0EaEiB6jfSi32xkMkVpiLGcXYjvrTw6gAoTJGm6zuN9KS8Ow7YlnUZS0FvEYLeQ6mu8SwdxALhACsSFIjUg66DY0A997bo4IRiqupQ9ZHsMggjqDWiCbWhkuMehfjbLW2ZDoQYPl+6g7blWnpy3BnkfZNP8AjVmTaurdDtd1aYDK4IzBhO0nQ86W4fIlxS6LdWPEhzINZ0lYIIPPYeYrZjetmXJ3onhbsjfWjcNa18t6Utl7xjbzBJOUMQTE6AkCCab4dpHnzrSjLMcI2XSNxz6eVMOHYqfCfZSJAaIwzGRRIUzVFNKLw7ZYpfg8SGAHMRTMLJqMFBUVxkkVK1tFWutAEgAiuxV95KjlowWRxuFD76+Xn1pSMG6Mck6/rc7U6u3m1hfq70kx/FmgBRDa9Px9K8xNRs6mLk9Ih2gwaWwrpoGHLqBvWb74G5rBAPvimXe59L9wlVkhBzPSaSE5WKspDCRBmR0FMpTdpUbcVxjTdsPxd4OxKDKOg25beVaHA41zbCtAEZSY1iIPPzHu9aza3NfCAR8Qfzo/C4pSImCBqD+7pTIwSAyVJVRprKDKczhlIkA7+71pRjr6s+4Ec40MbVDDueR0JEHlvzoTiKHPP3thMmf50ThQrHGpdjrh3FUQhSZkeI8wfz5a1dxDjiovhknfTaPOsdnjnFVXcTpAJE7+h3E7x5VahJ6XRJYoXyZTxXGtcYkwATMKIA9BS/CWBcdULqmcxmaYE7THnpV7JJgbkwPb+hQ9xAOetbMcKVICcjmLwjoz23GVkJkHy6eWvtoQWp5irXckyST6mfKvl861xjoyTnbLMPg2ZSVBOXUwDoD16a1KySppv2e4p83diVzI4ysp5jlQF2MzRpJJjy6VcXK2mDNKkwtLkii7CwJ60vw603tgMKajOyzDXCCDWnwOJDrPOsyqbRRuGulSvQVdWU9GoTarg1D4a4GAiiDQMiOsKqir4qq4NapFsBdz97ShL2DDg6TMknmesUXOkcp1qduyrNAaN4HU1w1jTZ0lLiI8fwOAjIJJGoJ5g/ht7qR8RDAiQZC5D105E84BgHpHStjduHY8joPxoTE4UXBDDSZ9vOmcE+hsMj/kY61J8JPWpDEQWkiV0MwAsiQNdtNaY43hxQlgMwHMTQCSGlAQx3KlgTHmDJolCuxjnfQxwuNERmWNdZ2HmelS+dLdQFXEjnoQZ8xtSaxbN7EpZNq3eF20zsGUIyKpKT3iw7agaEn61N7y2kVZwq2jaKqrZlywXUMpjmw0BPNq0RwOUXJMzyzKMlGtgGIX1mfLb99A3Kavh2ZC4UlQYnkD0pVdFBBBzfkzPaDibKe7QlepG/sPKs/ZxT5pzvPXMa03aHgrFjcmM4DLOxzCYmsvhrRz5Y1rVjRmyO2a3A3C6SdwYPnzBopVrQ3OzyW8FbuK2Z2Kg9DoxMeg/Cky2qekZ2z62KtCTrXUt1JTFELbL7ZAohLsGg1qTDSaOgbNBhcrIWDLKnVZ115jqJ6VfbpJw9mUzyinVm5OoqJUVJ2MsHicp8qdq0gVmFam2AxXI7UMkRMbCoMtdBqdLCE18Eb6eVQW8QQRuNj/AAqTvm0Jk1Q7Qdq5MUdNLWy5mLGSZqFwQBBriuDsPX99QY0xIoiaEv4NG5QevWmGGYZpaPbVWIXKxEc9PTlRVui7MtwvFCzfx94he8tWRbtWy0MyqPGwA1glVYRqSY3rK8N4tcCr3+IuNbuDICDmKkeJGyNownMJO3UQKb9pxcVrmYBgzZ7ZHhuJpHgcbjSCp330mknBbDXVFtc8nKgkIUJbQBifq8zptHpWrE7jQjIvu5P4PTOEOio9p28LIrgsI1KBteU6j3Vn0sB7mXYSZPkOnmdvbXeIY0qwTuWYiEzZio0AAA8BkwBpNUYXiVrxK2XvNAVLrIKmREHXXk0bCkulJ0NV8dgfErpv4BbwcSt24hj7KHx25nQkrlHSTGkEVjuGcOe64I8JbNkkaOyLmgesVz52+Ga7ZZW7u4xIBBExoGE+Ue6oYHGlbiQzZQWAhspXOGUleh8Z9wp+NUIkz0/geJH9Gu124UyOAw1OwIVfMHTQbRNLmUN4lIIPMbGr+0OW1gbVgAh7jG6410iViDrEnQeVK+B8NuW5ZyQGGifmRyP6NNjLbRU4fapB6W9K49uKb8LwyM5W4YDAhTMAN9kny5e2hHtUae6M8lqwBRU3PhPpXLiNNWW8KWGvupgsuw11TbEauTr/ACo6yxHKOtR4fimtp3eVImc2Xxe+mOMgww+0KhCdpp2ouyvwpdaMGm+GTPAHtqmUMsFdlYO/L0oxVoNEjbc6D050cDSZDImaVtfWiHwTZc3I1m8PxNiM2ZBBAy/a15gHcaVqfnytYUBwGcqo6gswG3trmWro6U7VUAoIOtV3cSg3dRHmBX2K7KO5P9ZEnYFD/nrDcdL4e49p4LLzGxBAII9hFN4tbaK5Rk9M1l3itpd7g9kn8qCxHaWyB9s+gH5ml97sq5wRxnfiO677JkP1cueM+f7usxSvsz2dbGhz85S1kyiCmctmzf21j6vnvROLspONNl3Fu0lu6pXuxOsFmJgn0A/dSPDYxbN0EDwOAdYmNQJI5ifYZrQ8c+TpsPYu3jjVY2rb3MvdZS2RS0Am6YmImDVnCPk++d4Ow/ztVZkFwDusxQPDZT9IJgk66b0cVJMGUotEeNtbuYO5iVcC7aUEgkRcUkBlYfaBBOh9RrWQxvBUbNk+wTodwASPaPjWr4n2HeycPafGI9m7eVLng7sjxKAo+kYszExGkRPKgO0PA2weMVO97zOl285yFAe9ZvCBmbbuzrPTrTqTdiuTS0zKW8xDWjLgTFsmZjfuzurwdOu3OKFwRhgROh5qTsegra9jOxhx1tr/AM4Fo2n7sjJnkoqsGzZxH1ulH9r+xy4dRiLd0XGJh0VQsgCSwGY6jpVtpFJWwbhnHku3bZJtvspFxVQ2xInuyTA57e6tfj8EAQyEMjCVI1BB21pHwf5M1e1bv/O8veKlwDuxC5wGic+u++lP8FgRYZMKcTnztCjKPBKl2MZjoT570lz4SvwzS+M4Uu0L1U11hrTvG8ICsFDTJAmOvlNGnsyP9rH/AAD/ADVpU0YZRZk2t0VgcKztlQakH4Cmdjg4a6U7zYEzAOxjYGvrtg4dwVaSp6RVvInpFRhTtie7ZKmDpFfd4dq1DcH78C6XC5vFAXQT7aW8T4K1kBg2dTodII/hVwyJ6YM409C9HimOBxBQz76W2t+prRYHgrFczkqeSx+NHOSXYEU30NbDBgGHT3VaxihLQyGBJHP18qnM60qgrPGVxJmmvB8QxxFgE/8A1bf/AHrSSziLAs3C7kXlK5FAkNO4J5EVXwHHM2Lww2Bv2R//AESufSb/AAdTk6PQ+PXlHGMKs+IqkDnE3f3Gsd8prk8QuKD9m2B6lRFeg8W7VizxKxgu4Dd8qnvM0FcxuCMuXX6nUb1592l4WT2gt28zOLl2xcOYzA0Zl9AEaPKByrQ0Z4va/B6kSk/MNP8AVdv7P7Kvz3whT85w+b6y37QM8iLig17seF4j+l/nWUfN/mvczmWZz5/q776V47xDC91xZrfTGrHo95XX/wBrCpImNo0ny0AfO7MgfsR/iPVPyKn+vXuQOHP+ImtffLef63Z/uP8A5vUfkT/1+/8A7u3+JbqVsl/ZQstu/wDSyBSSox5j6pCzifHHSf1rT35XMZ3eNUj6xwyD2d7dP4iP5a5myCvFxsQeI+4nEnfowgU6+WuPn1vr83t/4l6iToqrHPyWtHCccej3T7rCVmOFYq2byX1hPCwuhoXMmWSJ5mV8J6gCtb8kWJ7rhmLuZc3d3bjZZiclm2YnzilWJ+UoYjKlzBKtsyHAuZiVKx4SUAUgwQfKgndaCx/qpmx7UhRw20qAFSqBYiMvdmI8orOdjcF9PhmB1R2nzUq0R5ifd6VrrPFfm3DcJcyB/o7CwWygSg1mDt0pLw3jXzrG2WyKniHhBzRCNzgdelZsupR/KNnp2+ElWqezX8RtkuCBOVkn3ivuPJIHpSDtJxDEJi0W0zBS9oOAAQVYgHcGOk+lazFYrJHhn2x+VPxz5Nr2ZinBxSfuhH2dtEXTIP1DyjmK+43blj6mjeHXWa8Sdsp09o50Nxi0Sx13NaU7kmIekw11/qqA/dX8K7ixNhB1C/8AbVgtfQIDyVfwqy8g7tR0A/Cl+Qr0ZIWcrTtBmtZwzEM9vM28kdNqTPbUmnXDv2ftNNn0Jj2DXn8RrneVG4fEa4KJdAvs/Ob4pdlBb4D99M+y1m42MwpOgGIsmNtriHaqrdlV2GtWXLmUZpiNf5VjSOi5HsfGOyb3uJ2MaLiKllUBQhixym4dDt9se6s/YK4jtKWRgy2LJJI1GYJ3ZEjobseoPSvJHxbkmbjkHlmb99UG7BlCy6RoSD8OXlR3sDjrv4PTB2txH9OG339zuPnPc93mOWP2X1f/AF60H2/w2Tjlpo0uvhbntzrbP+HWARiCDJmZnnPrUrxZvEWJOkEkk6HqallqFq14N/8ALh/rlj+4/wDm9c+RFv67e/3cj/324rzp3ZjqxY9SSfxq/DXjbIZTBHSdecGNx5VGwVG1RpbMf0uJmfn+kf73pPWvSO3vYC5xDEreS8lsLaVIYMTKs7TppHj+FeRcVurcfOiC2SgcqpMBmAMidV1YHc7H2cuYpwoZXMGRGZyV0ESWMHc/8pqRetlzjT0z1L5LcAzcPx1jMMxv3rWblPdW0mOk61iu1XYa9gLaXHvpcDPkAVWBHhJ56cqyuDLfUDussCSGImYk+wRRF220KS7MGS4YYloKuy6T5AGiSK6Z6x2vcjgWEPVMP8bRrOfJw7NirZ0KhgD1ByPEHoYrBm4Yyl2KjZSxIHIQCYFG8PxpRlykgbmDGoml5I6/7wacMtON93/k/SGItW8xaFLaTOvSNKtxeFz86R8Cu274XEhE7x0GZwBmMaMs7gSolZjRTRGDkIzMNXObfqB/KlwkrtLszSi1pvov4day3SOgI+IqePwLMS2YACTzpbcbWh7jkcz7zWuMW9iJ0jR27Za0oB+yPwqGMcJbCk6gAe4RWY71vvH3mpo87/Gj+mA5hk054b+zPqaRKZ51MXCNAT7zVyjaoCLphNx/EakGoVTVqmioo8McgSSYil2NxJfb6o+PrVnFHlyvIE0C7cuVYzolLV8iSfwruSjMGniBA2NWC2Q4nbyMqdEX3mSab4bg5uYFsSDIV8jAbqYDAnyMwD1qeL4eLnic5ZMLGpMaxHOo4LibYfvMPnLW7iZHXTWTI30DjqNpocsXVoZhmrp+RA6ZSRoY6a12xaa4wVBJPmAPaToKtGGZ3yqNSdPx1PpR2FPdqQsHMWbMN2W2pLMJ5aN7A3WatIGbSegHEOUySAQ6AEcwUcqVJ5HwqfQirsOqlQBMHXedomfSfjQGOxKufCIEk6iJJgE+5V+NTs2yEeZgAf8ApnSJO0an3elFQuxrwDAm9iBbTLmcmAxCyVWQATux6c4rvFrLWrdoMIab6kHSMrrpHXelXDXi4niKsGWGHIyIPsPmKYcfxj3GUu5cgOSSNZZ2DFjOpJUeyKpXy+A7Tj8oWQcswTJ39OtW2QRlMcwRrvR/CfELiBC6gZxtK6gE6+tVraysQRBBUlTrlgyR7pOnWm1oBSpntPybY5ThbdttHAZhPNWM6eWh91ay9azCVIIryTs1jj85w5gBsr22VettHjTplKxTjA9r3sELcBYEyeoH76yKXF0/6GmWBz+6PxZsr9uOdLMQ1FYbiFrELnttMbjmPUUDjgRrFbMbMWWLRVnrouUKX61O04JiQPM08z1Yej1aHoa2smJo62hJy6SOWgobROLIK9WC4OtRZARpzrgSOXvqFHgeMaSfOh0Q0Y9ua+t2dd6xo32QFmQI501wGGCx5VXh8L00Hx/hTm1bW2hY7D4mmRQEpC7HYrJop+kIifuA/n+ulLrWBIIZtt55n06mjrCZ2LES2p8l03PkKYcP4e2IuRqLagAt0G8D+0dfSjoHlQDY4c9wXXQZbaJ42P3ZGYA82yyI86L7M9n2xC3cS4i3acIusKuXkZ3ABXTmTWqu4VFtNbUQgRh7IMkn3kmsAcaTcRLh+ia4jXFmFIlQ0/8ACKGmtInLkZxbPiyc82X4xTbi6oFt2kM3FBNwxAzZnKgHmchXX46QB+L2Qt+8FEL3j5R0UlimnLwx6UzxzrkW7dXOxRbdtZKghdSTl6BvfFWlsjYjwyOtxGCyQ6lZ2JkQCeh29tSxFyWYTPiOu0gEx796j84YxGms8+vnUAd6p0Eh32ZvReC/fRk9+o+MUfjbEYpGjwuUn2aN+HxpBg7mS4j9GFbPD5TluNspYnzAEmfdPvol0A3TCez1krj0ZgVUm4Ax0AJsuoP/ADEU6w3DkxNpVMrcGaCQdSNWk+ub3ih+zeKzlLmQvm8B0mM27CNo09hbrNMfn7JiUQAhBceNeTeI6eZLH21zvUL7orzZ08Mm4tx9v9GWxmExODcOmdDsGGzeUjQ+laLhHaa1iPo7jFLgjQjfrHXry9NKLw3EVxdtz3fgzFCGjXQNOh00YV5/2l4W9m5mVC1o6q8mVIiQzAQDO08ue9bccWladoyZcilLjJUzenF28+VLoLDb6ymem2hqHE8ctpc9wRJgab89ufrWBwT37v7NHdlCy6/WUGRBbmN4PlWqbslba3JuXe8YAy5Vsp0JBAGvTemxlJmecIx8nLvahFRokhiCrL9nRdPLadRzoPE9tbkk2wFJXLO8ak+HpvXMN2VlQSzSbhQgCPo1ZgW9oX4imS9lLQF2FkkRbLEnL4BqY/tE+6pUn2RThHobdmO0Fy/bFooCUWO8JgT0gCSIjXzp8xI0O/ONvZ5UqwOFt2hFtFXQAkAAmOtGfOeusVai49CpTUjxvuNfWr1wp0nnsKZ47gz29TqOo/PpUcLABMeIdfyrOabvaKwBbGugH699UX8SbpChYA2HWeZqy5ba40sdBsOlN+EcM3O3n09POmxFydbBsJw43D3SaKD9I/n90da12Cw621CKIUfqT51Vh7KooVRAGwq0GmUK5AfHrNx7LpbALMMu4Gh+tv5TWUTsxemCqFeoYfziPKttdah7jSCDqDoRVdktowWP4SbuNNtGGqpJ8u7RXK9Z1I9aU8YxouXWABCWwUtqZGVVMbHYkyT6094/izh8T3oEyrgdJyso9gJU+ylHEcKEBlvEApZgIlmGYgDpv/yn0oWNWxQtcBHWuhpYR1orA4MMc1wwo38z0FAEVlScpG0wPWtxggr4dQDIZcsjXc5T7RSNMCrFSNAPqjpP41bwrEXLYa0CuVdQSIKkkz67c6OIEthlgXLFwKG00Mg6a/DlTx8Yx8WWYIYAydgZI1mNSaQPjuUkk/aP5U84UGdJtEm6uqrpJ11A5TGwrJ6vFyqUfB0PRZFFOMvIx7NAjCnyuNPtVI+AHvo/vKE4PbC4YGCpLvIMg6ELr56Ef8NS7ytPpf20YvWfuskFGYjbMMykbgjRo9mQxz1ojD3yygnfUGNpBIMeWlCNDaEA+utWK0AAbDQeVPMlhpuVYj0Gr18blWQKN2o95Qmevi9QgclpTvSvE8GtOSSCOWhMR6UV84rqXazJbNLeqQHg+Aokwf16U0S0EEAVy0Zr5no0A9nz29NKgiE78qtR6sYRRWDR8mBNwNlE5RJ9KCbDATTThuP7t53GxHUUNiGliQIBJ0oU3dBtJqzzft5aIe20GIInXkRpMxz2A9ZkQh4kzXXLDXRTGwmACfhWy7fYebSvH1WAmBzB57+zb4Th8Te8IA3KiakgodFWYKMojzP5DmfWieHobrwTCIJPICl4tkx50aboVMiczqfvH91Ag2ObV8MGbZVgL+HvoLEXcrsBzgn9e3411nCKls7IM9zzJ2Hu/Glj38xLEkEmff8AlRApDFMQDyHv/fT7gmKKOpCkAGZGsR5jb21jZP3quw10gg5j7yPjVPaoOEuLPacQyFAy7PLx/aYlm+JJ9tKbpoTs5jc9kqxYkajNuORE8+tEuaZiVRoT6h3KziMaIU1SKktMoQW5q7Nc2r4NUIdmo5q6TXAahRVhmJPpRLvAmhUJVvI13EXKQh5O1iCdjFEI9LrTVeDHOrRBnbcUTIIpSjirVv8AnVkDLiKNjrVDXKibk0G+YGBJq0irAe1ih8M/UQR9XeRprrHpXna2oGZhoBp5mdK9Mx9gm2Q0ERXnPFXBbKohVnb4mqkFB6F5eTA57/rpReGtCTcP1E2825ChrNsk5QNTTW+gIWyu25PmefuoUg2yzhWF7xHZ9e8/fSjFYTKSNj0rV2ECqFGgApdxbDZhmFE46AjLZm5I3qamr2SdD/EVUbcUAw1PZLFkNlnQ1rS+tefcDu5LgNbY3NabARkDM9TQ0Ir0Qj0Ysu3r6o564blQo+LVzNVNx9ajmqiwq+VIoe2hJmqnu61NMRAMGl0OOuoBqtrxod7pPOqXeOdQoL70zRCXjS1Xnc1cl6KtEY5s3QDrVzXAdqRm551wYo1ZQx4rd+jIHMVgsTg5JJ2rT4jEyKRYq7IIG9Uwo6FyWwDA2+0evl6Uz4ZhxJc7t+jVGDt6EHnRmF/lUSLkwq9bHKgrqyCv6mjhrVOITWiFozd+2frDcaEVSF6e0U0x1mHkbET7aX3VHWl0PTIW2g7x+uda/A4nMinnsaxxbqKddn705k8pHs1oogTWjSo9Xq9AI9XB9KMQFG7UWvUMWr5mqEJh5q4Maosrzq4vUIL7Qe5JUCFgEllXeY1YjU5T7qvSxcH3P+pa/wA1B8NtLcUo7rbVr1kF2+qoyYjU6j8a1Pajs1hsPw+3dtRccso76T4w0kkAHKF2jyA151klklFul0dfD6XFNR5NpydaWv7meOEuH7n/AFLX+ao3MJcVS5XwDchkbmF+yTzIFazg3ZvA28LYu4pS74lkRfrAA3dVUBSI03J8/Sk/ajhfzS5eso7my1lbiqSTlm/bBHmQQ0HeG56mpHJPVpbKn6bCnJQbtX2tOvYX2OH37ih7di66mYZbdxlMEgwQIOoI9lS/onF/+VxH/Su/5aY47jN+xw7hvc3ntC5durcNtVdiven6qkHMwkwBudKtTtTxHD4fHXZvXbSC0ti7iLItMHd1Q+CBmAzNvIlV2zEU3kYBV/RmL/8AKYj/AKV3/LS687KxR1KsphlYFSD0IOoNegcKGJs3MHcucXt3VxIUtavZB3mfL+wyidMwjbUDrphO2jxjsT/eN+VWpWSgK5iZ2oW2daH7wxX1s1ZdDK1RCJVWG2k0UHokAyIQ19f5V1nqkmrKKcSkjak2ItGZinxMUDjtwTtB99CwosTBaZcF/aCPut7sp/OKAZdaacGSHEneR8DURcuhyhq5Najbt9aLVQBRimVEVSRJphh8NcukrbQmBJMgKo6sxICj1NErwpR/91hs3TvHj/myZfjVWCAWxAqDGr8dh7lohbixmEqZBVh1VlJDD0NAFzVl0LMIfobv95Z/7MRXofaYf6EwvpY/7TXn2CQm1dgE/SWdgT9jEdK0/FeP97gLOEFi6Gti3LFfCcggxGuvpXOyupS/B6P0sHPFicV1Jt/g1/DLlvD4DAjEg3e8uWhb0H0bPLW9zso0nes18o2GdcTeZnzK2HQqIjKBftAr56y0/wBqieC9sLa4e1ZxOEuXGsZcjBAwlNEaGIyuBpInrzikfabjL4t71022RVsqqqwMx39oyTESSTt0FEpp0l8CpYMkZZJSVKpW9Vv2NHw23hxwvAXL1pblxL+WwGd7Y718Q2XxID92dQRpRtztzadrtjFYT6P6S2Cri+l+4ndzZtgKMznOAB1BGkGPuzvC3xPCMOiPbQg3Gm5YTED9rcGiOQAYJ186os8KxhtpmxrF0U3bLjCWkFnwMsC13Z8cZwRI+sBoSJezjgHZsYGxftXbfDltvcxDYZSt+5euW7gkORbcAZFOYM6EwJ5Vje25/wBIYr+8P4CvV+yPBL9pu9e/auh82aMGmGfciSywTrrBAryPtu3+kcX/AHp/BatFoTB6O4ZYS5cVLlwWkMy7KzBYUkSq6mSAPbQNtqY8MS01xe+Z1t65mQBmGhiAdDrA9Joy2zUWOAWmS41rG27pt23ulRbuKSqDXVtOYHton/w0B3veYhLaWksuzlGYfTSFEKZ0Ij21RhcXgLFvEd1dxDvdw9yyA6IqzcAgkg6aqPfRlzj2Eu9+lxrqJdtYVAyICwawSzaExEwPfUtgCnF4HDpky422+Z1Vot3BkUzLmdwIGg11qz+jcHy4naP/AOK7VF18Hbe1csYjEZluIWZrdsFEEksm4LA5YB03p63a62Qf9J47b/YYb/LUtkMXccciTpzEQelDYlCYIE/lUbTaCaIR6Igoe2RrR3DtCDzmrRaBonDYcAzVIjY0Rqk7+00Pnr5L2Vg33SDHWDNELoecUYLcXCC4tu3baHczDXAPpHYAS0GVUcgB1NctcEtu6pZxdu7cZgAqo40+0xYiAqiSfSOdMrHF7eExOKctd/rAz22trbPguk3FeXYSRmIA2lTM8g+Idp0yNke/euXIRmv92mW1OZ0TuzpnMAneOegod+AqQPgAwuNgbsxcYqAw/ZXtQjL5FoBjRlb0pBn66HmOlaVeK28ZicPdNs2rlpu8vEa2zaseMPmJzZgFCajXMuu1Y+7iiWZjpmYmOkmfzq0SjT/JzjFT5zmuvazdzDKjXOdwQQoMDUb1szxq2uc/PLphW0bD3gAWzBSSFkERp5QeYNeSYC6y/VYj6W1sSPsXab4nEPL+NtUWdTr47g/AAeylsYehpxi3mYfO7jASn7C9Id5VRlCxpmHnNIu2HFrLYO8i4l3a4UARrd5RK3gCcziBAsXRHPKTz1z3zh5fxt9azzPRKr41dZrV/MxbK9uJJMfV2nb6ze89aqiAPD+1uJsWhaS9eQKTkCNYCAEljo9pm3J+1zoz/wAd4uf2+KjX7eGnyg9xpz61lDUlq6JRp27f4n/b4oaffwp1/wD19vKsrjsU9249y4xZ7jFizRJnacoAmI2ArlzaqlqJFostrJpggAFBWqKTaiKZMNXTcqo1A1ASbPVRqYrooiEraTVjaVK3UmqEJWjV3eRQy1YKsheuIjSu2VzsFmJ3J2AGpPsE0JRGCPiX1H41QI+tEZFsXrbuik5MpUXbRIZiEJ8LKcrTbaII0M1C5wKyAGOLeDJC9wS+kaaXMs6jXNBmaB4/o6gaDxGBoJneKUNQW+UVfZf8Wx9i3YI1nD2yltyM7uyG5cy6gOVOVUB1yLpIkk0jNhxujCdpBE/Cq6+p0lRaxy8s/9k=",
      descripcion: 'La franquicia Battlefield (en español: «Campo de batalla») es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principalmente por EA Digital Illusion CE y distribuida por Electronic Arts.',

    },]

}
