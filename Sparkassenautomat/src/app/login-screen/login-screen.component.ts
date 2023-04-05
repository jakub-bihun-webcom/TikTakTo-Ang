import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HandleUserAccountMoneyService } from '../user-cashout/services/handle-user-account-money.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  constructor(private router: Router, private handleUserAccountMoneyService: HandleUserAccountMoneyService) {}

  users = [
    { id: '1234', pin: '5678', userAccountMoney: 2300000, isAdmin: false },
    { id: '1', pin: '1', userAccountMoney: 11111, isAdmin: false },
    { id: '0000', pin: '1802349', userAccountMoney: 0, isAdmin: true }
  ];

  currentUserMoney?: number;
  pinInput?: string;
  idInput?: string;
  errorMessage: string = '';

  goToUserHomeScreen() {
    const user = this.users.find(u => u.id === this.idInput);
    if (user && user.pin === this.pinInput) {
      this.currentUserMoney = user.userAccountMoney;
      this.handleUserAccountMoneyService.setUserAccountMoney(user.userAccountMoney);
      this.router.navigate(['/user-home-screen']);
      console.log(this.currentUserMoney);
    } else {
      this.displayError('Bitte überprüfen sie ihre anmelde Daten');
      throw new Error('Input Validation ERROR');
    }
  }

  private displayError(error: string) {
    this.errorMessage = error;
  }

  clearError() {
    this.errorMessage = '';
  }
}