import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
      ],
      rating: 4.8,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    },
    {
      id: 2,
      name: 'Стол компьютерный Лофт,110х70x75 см, белый',
      description: 'Стол прекрасно подойдет к любому интерьеру, т.к он универсален. Прямые линии и нотки геометрии придадут помещению свободу пространства. Такой письменный стол явно привлечет внимание и внесет изюминку в ваш интерьер.Срок службы и сохранность мебели зависит не только от конструкции и качества изготовления, но и в значительной степени от правильного обращения и своевременного ухода за ней. ',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h7c/85119645319198.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h89/h09/85119645384734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hee/haa/86001962123294.jpg?format=gallery-medium',
      ],
      rating: 4.7,
      kaspiUrl: 'https://kaspi.kz/shop/p/stol-komp-juternyi-loft-110h70x75-sm-belyi-108418941/?c=750000000',
    },
    {
      id: 3,
      name: 'Пылесос Deerma DX700',
      description: 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий. ',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h83/63803872280606.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-medium',
      ],
      rating: 4.0,
      kaspiUrl: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    },
    {
      id: 4,
      name: 'Apple AirPods 3',
      description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium',
      ],
      rating: 5.0,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    },
    {
      id: 5,
      name: 'Наушники OEM P9 ',
      description: 'Характеристики Наушники OEM P9 серебристый. Очень прикольные, удобные, зимой надеваю и уши не мерзнут, очень понравилось, по цене очень удобно. из минусов только то, что полностью из пластмасса, но тому кто умеет носить и тот кто аккуратен наверное не помешает.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/hb2/84985846661150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
      ],
      rating: 4.2,
      kaspiUrl: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000',
    },
    {
      id: 6,
      name: 'Logitech G102 Lightsync ',
      description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h93/64119547428894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h8f/64119550246942.jpg?format=gallery-medium',
      ],
      rating: 4.5,
      kaspiUrl: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
    },
    {
      id: 7,
      name: ' Xiaomi Redmi 13C',
      description: 'Телефон отличного качества: звук, камера, цветопередача. В комплекте зарядка, прозрачный чехол и защитное стекло (на самом телефоне тоже наклеена защитная плёнка, что очень приятно). Огромное спасибо ИП Технострой! Вот, теперь думаю и себе заказать такой телефон!',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h82/84957845717022.jpg?format=gallery-medium',
      ],
      rating: 4.1,
      kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
    },
    {
      id: 8,
      name: 'Яндекс Станция Лайт 2 ',
      description: ' Во-первых тихая и звук хуже, чем в первой версии Лайт. Ощущение, что на телефоне включил музыку, чтобы понимали ее громкость. Во-вторых, реагирует хуже, чем в первой версии на голос. Не покупайте это убожество. Купил за 30к, выставил за 20к сразу. Надеюсь продам. И надеюсь кто-нибудь прочитает этот комментарий, а не как я не прочитав не изучив приобрел ее.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-medium',
      ],
      rating: 5.0,
      kaspiUrl: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
    },
    {
      id: 9,
      name: 'Apple iPhone 16 Pro Max',
      description: 'Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium',
      ],
      rating: 4.5,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
    },
    {
      id: 10,
      name: 'Realme Note 50',
      description: 'Смартфон Realme Note 50 диагональю 6.7" выполнен в голубом корпусе с защитой по стандарту IP54. Он поддерживает установку 2 SIM-карт, оборудован модулями 4G и GPS. Поэтому устройство без сбоев работает в беспроводной сети, при обрывах быстро восстанавливает связь.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/hfa/85063476903966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hcc/85063477100574.jpg?format=gallery-medium',
      ],
      rating: 4.7,
      kaspiUrl: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000',
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
