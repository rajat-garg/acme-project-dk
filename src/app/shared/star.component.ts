import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'apm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingEvent: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingEvent.emit(`${this.rating} clicked`);
    }
}