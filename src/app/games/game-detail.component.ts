import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from './game';
import { GameService } from './game.service';

@Component({
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  pageTitle: string = 'Game Detail';
  game:IGame | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService) {
}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.gameService.getProduct(id).subscribe({
      next: game => this.game = game,
      error: err => this.errorMessage = err
    });
  }
  onBack(): void{
    this.router.navigate(['/games']);
  }


}
