import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('gallery', GalleryPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
