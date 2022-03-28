export default class Scale {
    static sharp_text = "♯";
    static flat_text = "♭";
    static all_natural_notes: string[] = [
        "C",
        "D",
        "E",
        "F",
        "G",
        "A",
        "B",
    ];

    static sharps_list: string[] = [
        "F♯",
        "C♯",
        "G♯",
        "D♯",
        "A♯",
        "E♯",
        "B♯"
    ];

    static flats_list: string[] = [
        "B♭",
        "E♭",
        "A♭",
        "D♭",
        "G♭",
        "C♭",
        "F♭"
    ];

    static mode_names: string[] = [
        "ionian",
        "dorian",
        "phrygian",
        "lydian",
        "mixolydian",
        "aeolian",
        "locrian",
    ];

    static degree_names: { name: string, notation: string }[] = [
        {
            name: 'I',
            notation: 'M7'
        },
        {
            name: 'II',
            notation: 'm'
        },
        {
            name: 'III',
            notation: 'm'
        },
        {
            name: 'IV',
            notation: 'M7'
        },
        {
            name: 'V',
            notation: '7'
        },
        {
            name: 'VI',
            notation: 'm'
        },
        {
            name: 'VII',
            notation: 'dim'
        },
    ];

    // static scale_steps: number[] = [2, 3, 1, 2, 2, 2, 1];

    static get_alterations(key: string): string[] {
        const with_b: boolean = key.includes(Scale.flat_text) || key === 'F';
        const circle: string[] = with_b ? Scale.flats_list : Scale.sharps_list;
        const alteration_text = with_b ? Scale.flat_text : Scale.sharp_text;
        const key_string_to_check = !with_b ? key.replace(Scale.sharp_text, '') : key;

        const circle_index: number = circle.findIndex(note => (with_b ? note : note.slice(0, -1)) == key_string_to_check);


        let sharpsOrFlats: string[] = []
        if (circle_index === -1) {
            sharpsOrFlats = with_b ? [circle[0]] : circle
        } else {
            sharpsOrFlats = circle.slice(0, with_b ? circle_index + 2 : circle_index - 1);
        }

        return sharpsOrFlats
    }

    static get_major_scale_from_key(key: string): string[] {
        const notes_for_scale: string[] = []
        const with_b: boolean = key.includes(Scale.flat_text) || key === 'F';


        // Find major scale with circle of fifths or with flat
        const circle: string[] = with_b ? Scale.flats_list : Scale.sharps_list;
        const alteration_text = with_b ? Scale.flat_text : Scale.sharp_text;
        const key_string_to_check = !with_b ? key.replace(Scale.sharp_text, '') : key;

        const circle_index: number = circle.findIndex(note => (with_b ? note : note.slice(0, -1)) == key_string_to_check);


        let sharpsOrFlats: string[] = []
        if (circle_index === -1) {
            sharpsOrFlats = with_b ? [circle[0]] : circle
        } else {
            sharpsOrFlats = circle.slice(0, with_b ? circle_index + 2 : circle_index - 1);
        }

        console.log(sharpsOrFlats);

        const index_in_natural_notes: number = Scale.all_natural_notes
            .findIndex(note => note == key.replace(alteration_text, ''));

        notes_for_scale.push(key) // Push the first note


        // LOOP
        for (let i = 1; i < 7; i++) {
            let note_index = index_in_natural_notes + i;
            if (note_index >= Scale.all_natural_notes.length) {
                note_index -= Scale.all_natural_notes.length;
            }

            const note = sharpsOrFlats.includes(Scale.all_natural_notes[note_index] + alteration_text) ? Scale.all_natural_notes[note_index] + alteration_text : Scale.all_natural_notes[note_index];
            notes_for_scale.push(note)
        }
        // END LOOP

        return notes_for_scale;
    }

    static get_degrees(key: string) {
        const degrees: { notation: string, roman: string }[] = [];

        Scale.get_major_scale_from_key(key).forEach((note, index) => {
            const degree = {
                notation: note + ' ' + Scale.degree_names[index].notation,
                roman: Scale.degree_names[index].name
            }
            degrees.push(degree);
        });

        return degrees;
    }

    static get_modes(key: string) {
        const modes: { name: string, notes: string[] }[] = [];
        const scale = Scale.get_major_scale_from_key(key);

        scale.forEach((note, index) => {

            let notes: string[] = [];

            notes = [...scale.slice(index, scale.length), ...scale.slice(0, index)];

            const mode = {
                name: Scale.mode_names[index],
                notes
            }

            modes.push(mode);
        });
        return modes;
    }

    public key: string;
    public all_notes: string[];
    public alterations: string[];
    public degrees: { notation: string, roman: string }[];
    public modes: { name: string, notes: string[] }[];


    constructor(key: string) {
        this.key = key;
        this.all_notes = Scale.get_major_scale_from_key(key);
        this.degrees = Scale.get_degrees(key);
        this.modes = Scale.get_modes(key);
        this.alterations = Scale.get_alterations(key)
    }
}