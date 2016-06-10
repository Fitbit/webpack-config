import Config from '../src/Config';
import ConfigList from '../src/ConfigList';
import ConfigBuilder from '../src/ConfigBuilder';

describe('ConfigBuilder', () => {
    describe('#merge()', () => {
        it('should merge `values`', () => {
            const config = new ConfigBuilder().merge({
                foo: {
                    bar: 'bar1'
                },
                bar: ['bar1']
            }).build();

            expect(config.toObject()).toEqual({
                foo: {
                    bar: 'bar1'
                },
                bar: ['bar1']
            });
        });
    });

    describe('#defaults()', () => {
        it('should not add extra `values`', () => {
            const config = new ConfigBuilder().merge({
                foo: 'foo1'
            }).defaults({
                foo: 'foo2',
                bar: ['bar2']
            }).build();

            expect(config.toObject()).toEqual({
                foo: 'foo1',
                bar: ['bar2']
            });
        });
    });

    describe('#extend()', () => {
        it('should extend using `String`', () => {
            const config = new ConfigBuilder().extend('./test/fixtures/webpack.1.config.js').build();

            expect(config.toObject()).toEqual({
                tags: [
                    'config1',
                    'config2',
                    'config3',
                    'config5',
                    'config4'
                ]
            });
        });
    });

    describe('#copyOf()', () => {
        it('should do copy of `Config`', () => {
            const config = new ConfigBuilder().merge({
                foo: 'bar1'
            }).copyOf(Config.initWith({
                foo: 'bar2',
                bar: 'foo1'
            })).build();

            expect(config.toObject()).toEqual({
                foo: 'bar1',
                bar: 'foo1'
            });
        });

        it('should do copy of `ConfigList`', () => {
            const config = new ConfigBuilder().copyOf(ConfigList.initWith([{
                foo: 'foo1',
                bar: 'bar1'
            }])).merge({
                foo: 'foo2'
            }).build();

            expect(config).toEqual(ConfigList.initWith([{
                foo: 'foo2',
                bar: 'bar1'
            }]));
        });
    });

    describe('#applyHooks()', () => {
        it('should apply hooks for `Config`', () => {
            const config = new ConfigBuilder().merge({
                foo: 'foo1',
                bar: 'bar1'
            }).applyHooks({
                foo: () => 'foo2',
                bar: 'bar2',
                x: () => {}
            }).build();

            expect(config.toObject()).toEqual({
                foo: 'foo2',
                bar: 'bar2'
            });
        });

        it('should apply hooks for `ConfigList`', () => {
            const config = new ConfigBuilder().copyOf(ConfigList.initWith([{
                foo: 'foo1',
                bar: 'bar1'
            }])).applyHooks({
                foo: () => 'foo2',
                bar: 'bar2',
                x: () => {}
            }).build();

            expect(config).toEqual(ConfigList.initWith([{
                foo: 'foo2',
                bar: 'bar2'
            }]));
        });
    });
});
