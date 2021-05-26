// const ROOT = process.env.REACT_APP_API_URL
export const ROOT = 'http://192.168.1.168:8000/api/v1'
// export const ROOT = 'https://light-cms.herokuapp.com/api/v1'

// Companies
export const COMPANY_INFORMATIONS = () => `${ROOT}/companies` // GET ALL
export const COMPANY_INFORMATION = (id) => `${ROOT}/companies/${id}` // GET + id

// Contact
export const CONTACTS = () => `${ROOT}/contacts` // GET ALL
export const CONTACT = (id) => `${ROOT}/contacts/${id}` // GET + id
export const CONTACT_POST = () => `${ROOT}/contacts` // POST

// Faqs
export const FAQS = () => `${ROOT}/fAQS` // GET ALL
export const FAQ = (id) => `${ROOT}/fAQS/${id}` // GET + id

// Partners
export const PARTNERS = () => `${ROOT}/partners` // GET ALL
export const PARTNER = (id) => `${ROOT}/partners/${id}` // GET + id

// Photos
export const PHOTOS = () => `${ROOT}/photos` // GET ALL
export const PHOTO = (id) => `${ROOT}/photos/${id}` // GET + id

// Products
export const PRODUCTS_LIMIT = () => `${ROOT}/products/limit/10` // GET ALL
export const PRODUCTS = () => `${ROOT}/products` // GET ALL
export const PRODUCT = (id) => `${ROOT}/products/${id}` // GET + id


// ProductsCategories
export const PRODUCTS_CA_LIMIT = () => `${ROOT}/productcategories/limit/10` // GET ALL
export const PRODUCTS_CA = () => `${ROOT}/productcategories` // GET ALL
export const PRODUCT_CA = (id) => `${ROOT}/productcategories/${id}` // GET + id

// Services
export const SERVICES = () => `${ROOT}/services` // GET ALL
export const SERVICE = (id) => `${ROOT}/services/${id}` // GET + id

// Slider
export const SLIDERS = () => `${ROOT}/sliders` // GET ALL
export const SLIDER = (id) => `${ROOT}/sliders/${id}` // GET + id

// Teams
export const TEAMS = () => `${ROOT}/teams` // GET ALL
export const TEAM = (id) => `${ROOT}/teams/${id}` // GET + id

// Blogs
export const BLOGS = () => `${ROOT}/blogs` // GET ALL
export const BLOG = (id) => `${ROOT}/blogs/${id}` // GET + id
export const BLOG_LIMIT = (id) => `${ROOT}/blogs/limit/4`
export const BLOG_LAST = (id) => `${ROOT}/blogs_last`
export const BLOG_EXCEPT = (id) => `${ROOT}/blogs_except`


// Members
export const MEMBERS = () => `${ROOT}/members` // GET ALL
export const MEMBER = (id) => `${ROOT}/members/${id}` // GET + id

// Subscribes
export const SUBSCRIBE = () => `${ROOT}/subscribes` // GET ALL