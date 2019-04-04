import { Component, OnInit } from '@angular/core';
import { ConfService } from '../services/conf.service';
import { Configuration } from '../models/conf.model';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  conf: Configuration;
  mainTitle = new FormControl('', [Validators.required])
  slogan = new FormControl('', [Validators.required])
  bio = new FormControl('', [Validators.required])
  facebookUrl = new FormControl('', [Validators.required])
  twitterUrl = new FormControl('', [Validators.required])
  instagramUrl = new FormControl('', [Validators.required])
  wordpressUrl = new FormControl('', [Validators.required])
  homeImageUrl = new FormControl('', [Validators.required])
  coverUrl = new FormControl('', [Validators.required])
  largeCover = new FormControl('', [Validators.required])

  constructor(
    public confServer: ConfService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getConf();
  }

  getConf(): void {
    this.confServer.getConf().subscribe(conf => {
      this.mainTitle.setValue(conf.mainTitle);
      this.slogan.setValue(conf.slogan);
      this.bio.setValue(conf.bio);
      this.facebookUrl.setValue(conf.facebookUrl);
      this.twitterUrl.setValue(conf.twitterUrl);
      this.instagramUrl.setValue(conf.instagramUrl);
      this.wordpressUrl.setValue(conf.wordpressUrl);
      this.homeImageUrl.setValue(conf.homeImageUrl);
      this.coverUrl.setValue(conf.coverUrl);
      this.largeCover.setValue(conf.largeCover);
    });
  }

  hasError(): boolean {
    if (
      this.mainTitle.hasError('required') || 
      this.bio.hasError('required') || 
      this.slogan.hasError('required') || 
      this.facebookUrl.hasError('required') || 
      this.instagramUrl.hasError('required') || 
      this.twitterUrl.hasError('required') || 
      this.wordpressUrl.hasError('required') || 
      this.homeImageUrl.hasError('required') || 
      this.coverUrl.hasError('required') || 
      this.largeCover.hasError('required')
    ) {
      return true;
    }
    return false;
  }

  updateConf(): void {
    if (this.hasError()) {
      this.dialog.open(DialogAlertComponent, {
        width: '500px',
        data: {
          title: "Error",
          content: "All field can not empty!"
        },
        disableClose: true
      })
    } else {
      this.confServer.updateConf({
        mainTitle: this.mainTitle.value,
        slogan: this.slogan.value,
        bio: this.bio.value,
        facebookUrl: this.facebookUrl.value,
        twitterUrl: this.twitterUrl.value,
        instagramUrl: this.instagramUrl.value,
        wordpressUrl: this.wordpressUrl.value,
        homeImageUrl: this.homeImageUrl.value,
        coverUrl: this.coverUrl.value,
        largeCover: this.largeCover.value
      }).then(() => {
        this.dialog.open(DialogAlertComponent, {
          width: '500px',
          data: {
            title: "Information",
            content: "Your configuration is updated successfully!"
          },
          disableClose: true
        })
      }).catch(() => {
        this.dialog.open(DialogAlertComponent, {
          width: '500px',
          data: {
            title: "Error",
            content: "An error happennes. Try again!"
          },
          disableClose: true
        })
      })
    }
  }

}
