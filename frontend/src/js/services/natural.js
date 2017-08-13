import Request from './request';

export const getCodeFromNatural = (text) => {
  const req = new Request();
  return req.doPost('/api/pseudocode', { text });
} 

export default { getCodeFromNatural };
