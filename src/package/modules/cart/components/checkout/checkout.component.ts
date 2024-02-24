import { Component, OnInit } from '@angular/core';
import { Address } from 'src/package/modules/shared/model/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public address: Address[] = [];
  public selectedAddress!: number;
  constructor() { }

  ngOnInit(): void {
    this.address = [
      {
        name: 'John Doe',
        mobile: '9876543210',
        pincode: '123456',
        address: '123 Main Street',
        city: 'Exampleville',
        state: 'Exampleria',
        isDefault: true,
      },
      {
        name: 'Jane Smith',
        mobile: '9876543211',
        pincode: '654321',
        address: '456 Oak Avenue',
        city: 'Sampletown',
        state: 'Sampleland',
        isDefault: false,
      },
      {
        name: 'Bob Johnson',
        mobile: '9876543212',
        pincode: '789012',
        address: '789 Pine Road',
        city: 'Testburg',
        state: 'Testland',
        isDefault: false,
      },
    ];
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
