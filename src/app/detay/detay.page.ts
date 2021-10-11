import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.page.html',
  styleUrls: ['./detay.page.scss'],
})
export class DetayPage implements OnInit {
public yemekler:any;
public yemek_id:any;
public yemekDetay:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.yemek_id = this.activatedRoute.snapshot.paramMap.get('yemek_no');

 

    this.yemekler  = [
      {adi:'Adana Kebap',resim:'https://im.haberturk.com/2019/12/04/ver1575459460/adana-kebap_2546270_810x458.jpg',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {adi:'İzmir Köfte',resim:'https://i.lezzet.com.tr/images-xxlarge-recipe/izmir_kofte-22742567-6176-4e66-945b-8b3499f98bb3.jpg',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {adi:'Urfa Kebap',resim:'https://seyler.ekstat.com/img/max/800/V/Vz8NO9Jkg3QQdmWd-637443248468563810.jpg',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {adi:'Kayseri Kebap',resim:'',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {adi:'İstanbul Kebap',resim:'',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]}
    ]
      if(this.yemek_id){
        this.yemekDetay =  this.yemekler[this.yemek_id];
      }
     
  }

}
