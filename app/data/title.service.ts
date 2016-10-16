import { Injectable } from '@angular/core';




@Injectable()
export class TitleService {
	title: string = "";

  constructor() { }

	getTitle(): string{
		return this.title;
	};
	setTitle(title: string): void {
		this.title = title;
	};
}