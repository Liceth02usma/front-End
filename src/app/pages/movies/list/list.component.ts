import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
movies:Movie[]
  constructor(private moviesService:MovieService, private router:Router) { 
  }

  ngOnInit(): void {
    this.moviesService.list().subscribe((jsonResponse: any)=>{
      this.movies = jsonResponse.data;
    })
  }


  create(){
    this.router.navigate(["movies/create"])
  }

  edit(id:number): void {
    this.router.navigate(["movies/update/"+id])
  }

  eliminarMovie(id:number): void {
    Swal.fire({
      title: 'Eliminar',
      text: "Está seguro que quiere eliminar la película?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.moviesService.delete(id).subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'Eliminación culminada exitosamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }

}



/*
<div class="col-2">
                            <h3 class="mb-0">Películas</h3>
                        </div>
                        <div class="col-6">
                            
                        </div>
                        <div class="col-1">
                            <button type="button" class="btn btn-success">Crear</button>
                        </div>



                        <div class="row">
                    <div class="col-3">
                        <label>Nombre:</label>
                    </div>
                    <div class="col-9">
                        <input class="form-control"  type="text" [(ngModel)]="theMovie.name">
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <label>Duración:</label>
                    </div>
                    <div class="col-9">
                        <input class="form-control"  type="number" [(ngModel)]="theMovie.duration">
                    </div>
                </div>
<div class="row">
                    <div class="col-3">
                        <label>Año:</label>
                    </div>
                    <div class="col-9">
                        <input class="form-control"  type="date" [(ngModel)]="theMovie.year">
                    </div>
                </div>

*/