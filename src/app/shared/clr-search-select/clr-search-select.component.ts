import {
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostListener,
    Input,
    OnChanges,
    Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'clr-search-select',
    templateUrl: './clr-search-select.component.html',
    styleUrls: ['./clr-search-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ClrSearchSelectComponent),
            multi: true,
        },
    ],
})
export class ClrSearchSelectComponent<T> implements OnChanges, ControlValueAccessor {
    @Input() open = false;
    @Output() openChange = new EventEmitter<boolean>();
    @Input() options: T[];
    @Input() labelField = 'label';
    @Input() valueField = 'value';

    filter = '';
    filteredOptions: T[];
    value: string;
    label: string;

    constructor(private el: ElementRef) {}

    ngOnChanges() {
        this.filteredOptions = this.options;
    }

    private onChange = (_: any) => {};

    writeValue(value: string) {
        const selectedOption = this.options.find(
            option => option[this.valueField] === value,
        );
        if (!selectedOption) {
            throw new Error('No value in option');
        }
        this.value = value;
        this.label = selectedOption[this.labelField];
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(_: any) {}

    onSelect(item: T) {
        this.value = item[this.valueField];
        this.label = item[this.labelField];
        this.onChange(item[this.valueField]);
        this.closeDropdown();
    }

    onFocus() {
        this.openDropdown();
    }

    @HostListener('document:click', ['$event.path'])
    onFocusOut(targetElementPath: any[]) {
        let elementRefInPath = targetElementPath.find(
            e => e === this.el.nativeElement,
        );
        if (!elementRefInPath) {
            this.closeDropdown();
        }
    }

    onFilterChange(filter: string) {
        this.filter = filter;
        this.filteredOptions = this.options.filter(option =>
            option[this.labelField].includes(filter),
        );
    }

    openDropdown() {
        this.open = true;
        this.openChange.emit(true);
    }

    closeDropdown() {
        this.open = false;
        this.filter = '';
        this.filteredOptions = this.options;
        this.openChange.emit(false);
    }
}
