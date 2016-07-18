import {
    last
} from 'lodash';
import ConfigExtendTransform from '../src/ConfigExtendTransform';

describe('ConfigExtendTransform', () => {
    const transform1 = () => {},
        transform2 = () => {};

    let map;

    beforeEach(() => {
        map = new ConfigExtendTransform();
    });

    describe('#set()', () => {
        it('should throw `ReferenceError` when `value` is not `Function`', () => {
            expect(() => {
                map.set('./test/fixtures/webpack.1.config.js', false);
            }).toThrowError(ReferenceError);
        });

        it('should add `ConfigExtendTransform.DEFAULT` and `ConfigExtendTransform.CLEANUP` by default', () => {
            map.set('./test/fixtures/webpack.1.config.js');

            expect(map.get('./test/fixtures/webpack.1.config.js')).toEqual([
                ConfigExtendTransform.DEFAULT,
                ConfigExtendTransform.CLEANUP
            ]);
        });

        it('should prepend `ConfigExtendTransform.CLEANUP`', () => {
            map.set('./test/fixtures/webpack.1.config.js', transform1)
                .set('./test/fixtures/webpack.1.config.js', transform1)
                .set('./test/fixtures/webpack.1.config.js', transform1);

            expect(last(map.get('./test/fixtures/webpack.1.config.js'))).toEqual(ConfigExtendTransform.CLEANUP);
        });
    });

    describe('#setAll()', () => {
        it('should add `String`', () => {
            map.setAll('./test/fixtures/webpack.1.config.js');

            expect(map.get('./test/fixtures/webpack.1.config.js')).toEqual([
                ConfigExtendTransform.DEFAULT,
                ConfigExtendTransform.CLEANUP
            ]);
        });

        it('should add `Object<String,Function>`', () => {
            map.setAll({
                './test/fixtures/webpack.1.config.js': transform1
            }, {
                './test/fixtures/webpack.2.config.js': transform2
            });

            expect(map.get('./test/fixtures/webpack.1.config.js')).toEqual([
                transform1,
                ConfigExtendTransform.CLEANUP
            ]);
            expect(map.get('./test/fixtures/webpack.2.config.js')).toEqual([
                transform2,
                ConfigExtendTransform.CLEANUP
            ]);
        });

        it('should add `Object<String,Function[]>`', () => {
            map.setAll({
                './test/fixtures/webpack.1.config.js': [
                    transform1,
                    transform2
                ]
            }, {
                './test/fixtures/webpack.1.config.js': [
                    transform1,
                    transform2
                ]
            });

            expect(map.get('./test/fixtures/webpack.1.config.js')).toEqual([
                transform1,
                transform2,
                transform1,
                transform2,
                ConfigExtendTransform.CLEANUP
            ]);
        });
    });
});
