'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const LoginForm = () => {
  return (
    <div className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-6 sm:w-[30rem]'>
      <form action='/api/sign-in' method='post'>
        <Card>
          <CardHeader className='space-y-3'>
            <CardTitle className='text-center text-3xl'>Sign in</CardTitle>
            <CardDescription className='text-center'>
              Enter your email and password to login
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input name='email' id='email' type='email' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input name='password' id='password' type='password' required />
            </div>
            <div className='flex items-center space-x-2'>
              <Checkbox id='terms' name='terms' />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Remember me
              </label>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col'>
            <Button className='w-full'>Login</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default LoginForm;