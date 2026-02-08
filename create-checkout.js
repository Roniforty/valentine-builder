// Netlify Function for Stripe Payment
// Save this as: netlify/functions/create-checkout.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { customizations } = JSON.parse(event.body);
        
        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: "Valentine's Website Builder",
                            description: 'Custom Valentine website with download + 48hr preview link',
                            images: ['https://your-domain.com/preview-image.jpg'],
                        },
                        unit_amount: 200, // $2.00 in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.URL}/builder.html`,
            metadata: {
                customizations: JSON.stringify(customizations),
                timestamp: new Date().toISOString()
            },
            customer_email: undefined, // Will be filled by user at checkout
        });

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                sessionId: session.id,
                url: session.url
            })
        };

    } catch (error) {
        console.error('Payment error:', error);
        
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Payment processing failed',
                message: error.message
            })
        };
    }
};
