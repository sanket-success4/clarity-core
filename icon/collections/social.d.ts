import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';
import { bookmarkIconName } from '../shapes/bookmark.js';
import { calendarIconName } from '../shapes/calendar.js';
import { chatBubbleIconName } from '../shapes/chat-bubble.js';
import { crownIconName } from '../shapes/crown.js';
import { envelopeIconName } from '../shapes/envelope.js';
import { eventIconName } from '../shapes/event.js';
import { flagIconName } from '../shapes/flag.js';
import { halfStarIconName } from '../shapes/half-star.js';
import { happyFaceIconName } from '../shapes/happy-face.js';
import { hashtagIconName } from '../shapes/hashtag.js';
import { heartBrokenIconName } from '../shapes/heart-broken.js';
import { heartIconName } from '../shapes/heart.js';
import { inboxIconName } from '../shapes/inbox.js';
import { neutralFaceIconName } from '../shapes/neutral-face.js';
import { pictureIconName } from '../shapes/picture.js';
import { sadFaceIconName } from '../shapes/sad-face.js';
import { shareIconName } from '../shapes/share.js';
import { starIconName } from '../shapes/star.js';
import { talkBubblesIconName } from '../shapes/talk-bubbles.js';
import { tasksIconName } from '../shapes/tasks.js';
import { thumbsDownIconName } from '../shapes/thumbs-down.js';
import { thumbsUpIconName } from '../shapes/thumbs-up.js';
export declare const socialCollectionIcons: IconShapeTuple[];
export declare const socialCollectionAliases: IconAlias[];
/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadSocialIconSet } from '@cds/core/icon';
 *
 * loadSocialIconSet();
 * ```
 *
 */
export declare function loadSocialIconSet(): void;
declare module '@cds/core/internal' {
    interface IconRegistrySources {
        [bookmarkIconName]: string;
        [calendarIconName]: string;
        [chatBubbleIconName]: string;
        [crownIconName]: string;
        [envelopeIconName]: string;
        [eventIconName]: string;
        [flagIconName]: string;
        [halfStarIconName]: string;
        [happyFaceIconName]: string;
        [hashtagIconName]: string;
        [heartIconName]: string;
        [heartBrokenIconName]: string;
        [inboxIconName]: string;
        [neutralFaceIconName]: string;
        [pictureIconName]: string;
        [sadFaceIconName]: string;
        [shareIconName]: string;
        [starIconName]: string;
        [talkBubblesIconName]: string;
        [tasksIconName]: string;
        [thumbsDownIconName]: string;
        [thumbsUpIconName]: string;
    }
}
