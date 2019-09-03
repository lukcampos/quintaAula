import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { CrudService } from '../../crud.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userForm: FormGroup;
  id: string;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    private router: Router) {

    //pegar id do parametro da URL
    this.id = this.activatedRoute.snapshot.paramMap.get("id")

    this.userForm = this.formBuilder.group({
      id: this.id,
      first_name: '',
      last_name: '',
      avatar: ''
    })

  }

  async ngOnInit() {

    //verificar se têm id e preencher o form de usuário
    if (this.userForm.value.id) {
      var user = await this.crudService.getOne(this.userForm.value.id)
      user = user['data']
      this.userForm = this.formBuilder.group({
        id: user['id'],
        first_name: user['first_name'],
        last_name: user['last_name'],
        avatar: user['avatar']
      })
    }
  }


  async save() {

    const user = this.userForm.value
    // atualizar usuario
    var usuarioAtualizado = await this.crudService.update(user.id, user)


    alert(`Usuário ${user.first_name} foi atualizado com sucesso!`)

    this.router.navigate(['/list']);

    //volatr apra lista de usuários
  }

}
