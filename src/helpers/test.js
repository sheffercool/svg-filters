import deepFreeze from './deepFreeze';
import deepClone from './deepClone';

describe('actions', () => {
  it(
    'deepFreeze() should prevent object mutation',
    () => {
      const stateBefore = {
        id: 'blur',
        name: 'Hello',
        groupName: 'blur',
        params: {
          'stdDeviation': {
            'value': 4,
            'type': 'number'
          },
          'mode': {
            'value': 'multiply',
            'type': 'select'
          },
          result: 'blur'
        },
        paramsValues: [
          'mode': [
            'normal',
            'multiply',
            'screen',
            'darken',
            'lighten'
          ],
          'test': [
            {
              id: 1,
              text: 'hello'
            },
            {
              id: 2,
              text: 'Smile'
            }
          ]
        ]
      };

      deepFreeze(stateBefore);

      const changeProp = () => {
        try {
          stateBefore.params.mode.value = 'darken';
        }
        catch(err) {
          throw new TypeError();
        }
      };

      expect(
        changeProp
      ).toThrow(TypeError());
    });
});

describe('actions', () => {
  it(
    'deepClone() should return cloned object',
    () => {
      const stateBefore = {
        id: 'blur',
        name: 'Hello',
        groupName: 'blur',
        params: {
          'stdDeviation': {
            'value': 4,
            'type': 'number'
          },
          'mode': {
            'value': 'multiply',
            'type': 'select'
          },
          result: 'blur'
        },
        paramsValues: [
          'mode': [
            'normal',
            'multiply',
            'screen',
            'darken',
            'lighten'
          ],
          'test': [
            {
              id: 1,
              text: 'hello'
            },
            {
              id: 2,
              text: 'Smile'
            }
          ]
        ]
      };
      const stateAfter = {
        id: 'blur',
        name: 'Hello',
        groupName: 'blur',
        params: {
          'stdDeviation': {
            'value': 4,
            'type': 'number'
          },
          'mode': {
            'value': 'multiply',
            'type': 'select'
          },
          result: 'blur'
        },
        paramsValues: [
          'mode': [
            'normal',
            'multiply',
            'screen',
            'darken',
            'lighten'
          ],
          'test': [
            {
              id: 1,
              text: 'hello'
            },
            {
              id: 2,
              text: 'Smile'
            }
          ]
        ]
      };

      deepFreeze(stateBefore);

      expect(
        deepClone(stateBefore)
      ).toEqual(stateAfter);
    });
});
