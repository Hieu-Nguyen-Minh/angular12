import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'hieu nguyen'; // đẩy data từ component ra HTML hay còn gọi là databinding value 1 chiều
  // đẩy data từ component ra thẻ HTML thông qua thuộc tính của thẻ
  public age = 16;

  public distincts: string[] | string = ['quận huyện'];

  public vietNamData = [
    { city: 'Chọn thành phố', district: 'quận huyện' },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Hà Nội',
      district: [
        'Quận Ba Đình',
        'Huyện Ba Vì',
        'Quận Bắc Từ Liêm',
        'Quận Cầu Giấy',
        'Huyện Chương Mỹ',
        'Huyện Đan Phượng',
        'Huyện Đông Anh',
        'Quận Đống Đa',
        'Huyện Gia Lâm',
        'Quận Hà Đông',
        'Quận Hai Bà Trưng',
        'Huyện Hoài Đức',
        'Quận Hoàn Kiếm',
        'Quận Hoàng Mai',
        'Quận Long Biên',
        'Huyện Mê Linh',
        'Huyện Mỹ Đức',
        'Quận Nam Từ Liêm',
        'Huyện Phú Xuyên',
        'Huyện Phúc Thọ',
        'Huyện Quốc Oai',
        'Huyện Sóc Sơn',
        'Thị xã Sơn Tây',
        'Quận Tây Hồ',
        'Huyện Thạch Thất',
        'Huyện Thanh Oai',
        'Huyện Thanh Trì',
        'Quận Thanh Xuân',
        'Huyện Thường Tín',
        'Huyện Ứng Hòa',
      ],
    },
  ];

  public counter = 0;
  public counterBp = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.counter = this.commonService.getCounter();
    this.counterBp = this.commonService.binhPhuong(this.counter);
    this.commonService.setCounter(1);
  }

  changeCity(e: any) {
    const city = e.target.value;

    if (!city) {
      return;
    }

    // cách 1
    // const search = this.vietNamData.filter((data) => data.city === city); // trả về 1 mảng mới chứa các obj thoả mãn đk
    // if (search && search.length > 0) {
    //   this.distincts = search[0].district;
    //   console.log(this.distincts);
    // }

    //cách 2

    this.distincts =
      this.vietNamData.find((d) => d.city === city)?.district || []; //tìm trong vietNamData có thằng nào thoản mãn đk
    // thì trả về district của thằng đó nếu không có trả về mảng rỗng
  }

  resetName() {
    this.name = '';
  }
}
