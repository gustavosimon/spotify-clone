import types from './types';

export function playMusic(music) {
    return {
        type: types.PLAY_MUSIC,
        payload: { music },
    };
}

export function pauseMusic() {
    return {
        type: types.PAUSE_MUSIC,
    };
}
