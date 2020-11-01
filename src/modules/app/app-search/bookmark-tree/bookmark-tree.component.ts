import { Component, Input, Output } from 'angular-ts-decorators';
import autobind from 'autobind-decorator';
import BookmarkHelperService from '../../../shared/bookmark/bookmark-helper/bookmark-helper.service';
import { Bookmark } from '../../../shared/bookmark/bookmark.interface';
import { PlatformService } from '../../../shared/global-shared.interface';
import UtilityService from '../../../shared/utility/utility.service';
import { AppHelperService } from '../../app.interface';

@autobind
@Component({
  controllerAs: 'vm',
  selector: 'bookmarkTree',
  styles: [require('./bookmark-tree.component.scss')],
  template: require('./bookmark-tree.component.html')
})
export default class BookmarkTreeComponent {
  Strings = require('../../../../../res/strings/en.json');

  appHelperSvc: AppHelperService;
  bookmarkHelperSvc: BookmarkHelperService;
  platformSvc: PlatformService;
  utilitySvc: UtilityService;

  @Input('<ngModel') nodes: Bookmark[];
  @Input() selectedBookmark: Bookmark;

  @Output() deleteBookmark: () => any;
  @Output() editBookmark: () => any;
  @Output() selectBookmark: () => any;
  @Output() shareBookmark: () => any;

  static $inject = ['AppHelperService', 'BookmarkHelperService', 'PlatformService', 'UtilityService'];
  constructor(
    AppHelperSvc: AppHelperService,
    BookmarkHelperSvc: BookmarkHelperService,
    PlatformSvc: PlatformService,
    UtilitySvc: UtilityService
  ) {
    this.appHelperSvc = AppHelperSvc;
    this.bookmarkHelperSvc = BookmarkHelperSvc;
    this.platformSvc = PlatformSvc;
    this.utilitySvc = UtilitySvc;
  }
}
