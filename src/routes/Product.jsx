import { useParams, Form, useActionData } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  const data = useActionData();
    return (
      <>
        <h1>Produkt { productId }</h1>
        <h2>Frage zum Produkt { productId } </h2>
        <Form className="product-form" method="post"  action={`/product/${productId}`} >
          
        {data && data.success && <p className="notice-green">{data.success}</p>}
        {data && data.error && <p className="notice-red">{data.error}</p>}

          <div className="form-field">
            <label>Ihre E-Mail</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-field">
            <label>Ihre Frage</label>
            <textarea name="message" required></textarea>
          </div>
          <button>Senden</button>

        </Form>
      </>
    );
  }

  export const productAction = async ({ request }) => {
  
    const data = await request.formData()

    const submission = {
      email: data.get('email'),
      message: data.get('message')
    }

    console.log(submission)
    console.log(request)

    if (submission.message.length < 10) {
      return {error : "Die Anfrage muss mindestens 10 Zeichen enthalten"}
    } else {
      return {success: "Anfrage erfolgreich übermittelt."}
    }

  }