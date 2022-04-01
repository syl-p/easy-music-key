export default class ScaleClass {
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
        "F",
        "C",
        "G",
        "D",
        "A",
        "E",
        "B"
    ].map(note => note + ScaleClass.sharp_text);

    static flats_list: string[] = [
        "B",
        "E",
        "A",
        "D",
        "G",
        "C",
        "F"
    ].map(note => note + ScaleClass.flat_text);

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

    static get_alterations(key: string): string[] {
        const with_b: boolean = key.includes(ScaleClass.flat_text) || key === 'F';
        const circle: string[] = with_b ? ScaleClass.flats_list : ScaleClass.sharps_list;
        const key_string_to_check = !with_b ? key.replace(ScaleClass.sharp_text, '') : key;

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
        const with_b: boolean = key.includes(ScaleClass.flat_text) || key === 'F';
        const alteration_text = with_b ? ScaleClass.flat_text : ScaleClass.sharp_text;
        const notes_for_scale: string[] = []

        const sharpsOrFlats: string[] = ScaleClass.get_alterations(key);

        const index_in_natural_notes: number = ScaleClass.all_natural_notes
            .findIndex(note => note == key.replace(alteration_text, ''));

        notes_for_scale.push(key) // Push the first note

        // LOOP
        for (let i = 1; i < 7; i++) {
            let note_index = index_in_natural_notes + i;
            if (note_index >= ScaleClass.all_natural_notes.length) {
                note_index -= ScaleClass.all_natural_notes.length;
            }

            const note = sharpsOrFlats.includes(ScaleClass.all_natural_notes[note_index] + alteration_text) ? ScaleClass.all_natural_notes[note_index] + alteration_text : ScaleClass.all_natural_notes[note_index];
            notes_for_scale.push(note)
        }
        // END LOOP

        return notes_for_scale;
    }

    static get_degrees(key: string) {
        const degrees: { notation: string, roman: string, notes: string[] }[] = [];

        ScaleClass.get_major_scale_from_key(key).forEach((note, index) => {
            const mode_notes: string[] = ScaleClass.get_modes(key)[index].notes
            const degree = {
                notation: note + ' ' + ScaleClass.degree_names[index].notation,
                roman: ScaleClass.degree_names[index].name,
                notes: mode_notes.filter((note, index) => [0, 2, 4, 6].includes(index))
            }
            degrees.push(degree);
        });

        return degrees;
    }

    static get_modes(key: string) {
        const modes: { name: string, notes: string[] }[] = [];
        const scale = ScaleClass.get_major_scale_from_key(key);

        scale.forEach((note, index) => {

            let notes: string[] = [];

            notes = [...scale.slice(index, scale.length), ...scale.slice(0, index)];

            const mode = {
                name: ScaleClass.mode_names[index],
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
        this.all_notes = ScaleClass.get_major_scale_from_key(key);
        this.degrees = ScaleClass.get_degrees(key);
        this.modes = ScaleClass.get_modes(key);
        this.alterations = ScaleClass.get_alterations(key)
    }
}