import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public yemekler:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.yemekler  = [
      {no:0,adi:'Adana Kebap',resim:'https://im.haberturk.com/2019/12/04/ver1575459460/adana-kebap_2546270_810x458.jpg',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {no:1,adi:'İzmir Köfte',resim:'https://i.lezzet.com.tr/images-xxlarge-recipe/izmir_kofte-22742567-6176-4e66-945b-8b3499f98bb3.jpg',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {no:2,adi:'Urfa Kebap',resim:'https://seyler.ekstat.com/img/max/800/V/Vz8NO9Jkg3QQdmWd-637443248468563810.jpg',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {no:3,adi:'Kayseri Kebap',resim:'',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]},
      {no:4,adi:'İstanbul Kebap',resim:'',kategori:'Kebap',tarif:'Etleri pişir...',malzeme:[{adi:'1 kg Et'},{adi:'100 gr tuz'}]}
    ]
  }




}
