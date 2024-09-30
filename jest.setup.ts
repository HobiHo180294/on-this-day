import { server } from '@/mocks/server';
import '@testing-library/jest-dom';
import 'dotenv/config';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
