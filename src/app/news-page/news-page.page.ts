import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
})
export class NewsPagePage implements OnInit {
  article;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

}
