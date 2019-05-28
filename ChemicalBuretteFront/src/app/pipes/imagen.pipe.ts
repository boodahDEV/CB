import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    // let url = URL_SERVICIOS + '/img';
    let url = 'http://api.hackrry.com' + '/uploads';

    if (!img) {
      return url + '/no-img.jpg'
    }

    if (img.indexOf('http') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + img;
        break;

      case 'medico':
        url += '/medicos/' + img;
        break;

      case 'hospital':
        url += '/hospitales/' + img;
        break;

      default:
        console.log('Tipo de imagen no existe, usuario, medico, hospital');
        url += '/no-img.jpg';
        break;
    }
    return url;
  }

}
