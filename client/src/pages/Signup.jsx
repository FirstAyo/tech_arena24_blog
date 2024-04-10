import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

function Signup() {
    return (
        <div className='min-h-screen mt-20 w-[80%] mx-auto flex flex-col md:flex-row md:items-center gap-5'>
            {/* left side div */}
            <div className='md:flex-1'>

                <Link to='/' className='font-bold dark:text-white text-4xl'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Tech Arena24</span>
                    Blog
                </Link>
                <p className='text-sm mt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, facilis. Nulla, voluptate quos voluptatem sed fugit adipisci? Animi labore praesentium aspernatur, impedit ex recusandae omnis quod! Dignissimos perspiciatis beatae blanditiis?
                </p>

            </div>

            {/* rigth side div */}
            <div className='md:flex-1'>
                <div>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <Label value='Your Username'></Label>
                            <TextInput
                                type='text'
                                placeholder='Username'
                                id='username'
                            />
                        </div>
                        <div>
                            <Label value='Your Email'></Label>
                            <TextInput
                                type='text'
                                placeholder='name@company.com'
                                id='email'
                            />
                        </div>
                        <div>
                            <Label value='Your Password'></Label>
                            <TextInput
                                type='text'
                                placeholder='Password'
                                id='password'
                            />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
                    </form>

                    <div className='flex gap-2 text-sm mt-5'>
                        <span>Have an account?</span>
                        <Link to='/' className='text-blue-500'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
