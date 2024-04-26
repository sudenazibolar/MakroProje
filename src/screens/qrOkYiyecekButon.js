import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import App from "./slider.js";
import urunler from './urunler.js';




const MenuItem = ({ text, onPress, highlighted }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.menuItem, highlighted && styles.highlighted]}>
                <Text style={[styles.text, highlighted && styles.highlightedText]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const MenuItem1 = ({ imageSource, text, onPress, highlighted }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.menuItem1, highlighted && styles.highlighted1]}>
                <Image source={imageSource} style={styles.image1} />
                <Text style={[styles.text1, highlighted && styles.highlightedText1]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const MenuItem2 = ({ text, onPress, highlighted }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.menuItem2, highlighted ? styles.highlighted2 : styles.notHighlighted]}>
                <Text style={[styles.text2, highlighted ? styles.highlightedText2 : styles.notHighlightedText]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image source={require('../icons/search.png')} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Arama"
                    placeholderTextColor="#C1D0DA"
                />
                <TouchableOpacity>
                    <Image source={require('../icons/qr.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.settingsContainer}>
                <Image source={require('../icons/setting.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const ProductBox = ({ imageSource, title, kategori, price, description, kcal, protein, fat, carb }) => {
    return (
        <ScrollView style={{ marginTop: 10 }}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#C1D0DA', marginHorizontal: 10, marginTop: 10, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={imageSource} style={{ marginHorizontal: 10, width: 80, height: 80 }} />
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#3D4C5E' }}>{title}</Text>
                            <Text style={{ color: '#F4690B' }}>{price}</Text>
                        </View>
                        <Text style={{ fontSize: 13, width: 270, marginTop: 6, color: '#546881' }}>{description}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'space-evenly' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../icons/vect1.png')} style={{}} />
                        <Text style={{ color: '#FF455B', marginHorizontal: 5, fontSize: 12 }}>Kcal: {kcal}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../icons/vect2.png')} style={{}} />
                        <Text style={{ color: '#F4690B', marginHorizontal: 5, fontSize: 12 }}>Protein: {protein}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#019DE7', marginHorizontal: 5, fontSize: 12 }}>Yağ: {fat}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../icons/vect3.png')} style={{}} />
                        <Text style={{ color: '#3DBD41', marginHorizontal: 5, fontSize: 12 }}>Karb: {carb}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const QrOkYiyecekButon = () => {
    const [highlightedIndexMenu, setHighlightedIndexMenu] = useState(null);
    const [highlightedIndexMenuItem, setHighlightedIndexMenuItem] = useState(null);

    const [highlightedIndexMenu1, setHighlightedIndexMenu1] = useState(null);
    const [highlightedIndexMenuItem1, setHighlightedIndexMenuItem1] = useState(null);

    const handleMenuPress = (index) => {
        setHighlightedIndexMenu(index);

        setHighlightedIndexMenuItem(null);
    };

    const handleMenuItemPress = (index) => {
        setHighlightedIndexMenuItem(index);


        if (index === 0) {
            setHighlightedIndexMenuItem1(1);
        }
        if (index === 1) {
            setHighlightedIndexMenuItem1(4);
        }
        if (index === 2) {
            setHighlightedIndexMenuItem1(7);
        }
    };


    const handleMenuItemPress1 = (index) => {
        setHighlightedIndexMenuItem1(index);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <App />

            <View style={{ backgroundColor: '#F5F5F5', height: 60, marginTop: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <MenuItem
                    text="İçecek"
                    onPress={() => handleMenuPress(0)}
                    highlighted={highlightedIndexMenu === 0}
                />
                <MenuItem
                    text="Yiyecek"
                    onPress={() => handleMenuPress(1)}
                    highlighted={highlightedIndexMenu === 1}
                />
            </View>

            {highlightedIndexMenu === 0 && ( // içicek
                <View style={{}}>

                    <View style={styles.menuContainer}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <MenuItem1
                                imageSource={require('../icons/kahve.png')}
                                text="Kahve"
                                onPress={() => handleMenuItemPress(0)}
                                highlighted={highlightedIndexMenuItem === 0}
                            />
                            <MenuItem1
                                imageSource={require('../icons/alkolsüz.png')}
                                text="Alkolsüz"
                                onPress={() => handleMenuItemPress(1)}
                                highlighted={highlightedIndexMenuItem === 1}
                            />
                            <MenuItem1
                                imageSource={require('../icons/alkollü.png')}
                                text="Alkollü"
                                onPress={() => handleMenuItemPress(2)}
                                highlighted={highlightedIndexMenuItem === 2}
                            />
                            <MenuItem1
                                imageSource={require('../icons/şarap.png')}
                                text="Şarap"
                                onPress={() => handleMenuItemPress(3)}
                                highlighted={highlightedIndexMenuItem === 3}
                            />
                            <MenuItem1
                                imageSource={require('../icons/kokteyl.png')}
                                text="Kokteyl"
                                onPress={() => handleMenuItemPress(4)}
                                highlighted={highlightedIndexMenuItem === 4}
                            />
                        </ScrollView>
                    </View>

                    {highlightedIndexMenuItem == 0 && ( // kahve

                        <View style={styles.menuContainer1}>
                            <MenuItem2
                                text="İtalyan"
                                onPress={() => handleMenuItemPress1(1)}
                                highlighted={highlightedIndexMenuItem1 === 1}
                            />
                            <MenuItem2
                                text="Sıcak"
                                onPress={() => handleMenuItemPress1(2)}
                                highlighted={highlightedIndexMenuItem1 === 2}
                            />
                            <MenuItem2
                                text="Soğuk"
                                onPress={() => handleMenuItemPress1(3)}
                                highlighted={highlightedIndexMenuItem1 === 3}
                            />

                        </View>

                    )}

                    {highlightedIndexMenuItem == 1 && ( // alkolsüz

                        <View style={styles.menuContainer1}>
                            <MenuItem2
                                text="Anadolu"
                                onPress={() => handleMenuItemPress1(4)}
                                highlighted={highlightedIndexMenuItem1 === 4}
                            />
                            <MenuItem2
                                text="İthal"
                                onPress={() => handleMenuItemPress1(5)}
                                highlighted={highlightedIndexMenuItem1 === 5}
                            />
                            <MenuItem2
                                text="Türk Craft"
                                onPress={() => handleMenuItemPress1(6)}
                                highlighted={highlightedIndexMenuItem1 === 6}
                            />
                        </View>

                    )}


                    {highlightedIndexMenuItem == 2 && ( // alkollü

                        <View style={styles.menuContainer1}>
                            <MenuItem2
                                text="Anadolu"
                                onPress={() => handleMenuItemPress1(7)}
                                highlighted={highlightedIndexMenuItem1 === 7}
                            />
                            <MenuItem2
                                text="İthal"
                                onPress={() => handleMenuItemPress1(8)} //
                                highlighted={highlightedIndexMenuItem1 === 8}
                            />
                            <MenuItem2
                                text="Türk Craft"
                                onPress={() => handleMenuItemPress1(9)} // 
                                highlighted={highlightedIndexMenuItem1 === 9}
                            />
                        </View>

                    )}

                    {highlightedIndexMenuItem1 === 1 && (

                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />

                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "italyan" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>

                    )}

                    {highlightedIndexMenuItem1 === 2 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "sıcak" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}
                    {highlightedIndexMenuItem1 === 3 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "soguk" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}


                    {highlightedIndexMenuItem1 === 4 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "anadolu1" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}
                    {highlightedIndexMenuItem1 === 5 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "ithal1" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}
                    {highlightedIndexMenuItem1 === 6 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "turkcraft1" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}


                    {highlightedIndexMenuItem1 === 7 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "anadolu" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}
                    {highlightedIndexMenuItem1 === 8 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "ithal" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}
                    {highlightedIndexMenuItem1 === 9 && (
                        <View style={{ flexDirection: 'column' }}>
                            <SearchBar />
                            {urunler.map((urun, index) => (
                                urun.kategori && urun.kategori === "turkcraft" && (
                                    <ProductBox
                                        key={index}
                                        kategori={urun.kategori}
                                        imageSource={urun.image}
                                        title={urun.title}
                                        price={urun.price}
                                        description={urun.description}
                                        kcal={urun.kcal}
                                        protein={urun.protein}
                                        fat={urun.fat}
                                        carb={urun.carb}
                                    />
                                )
                            ))}

                        </View>
                    )}

                    <View style={{ position: 'absolute', top: 350, left: 0, right: 5, zIndex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: '#F4690B', height: 80, width: 80, borderRadius: 40, alignItems:'center',justifyContent:'center'}} >
                            <Image source={require('../icons/zil.png')} style={{ }} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            )
            }
            {
                highlightedIndexMenu === 1 && ( //yemek
                    <View style={{}}>
                        <View style={styles.menuContainer}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <MenuItem1
                                    imageSource={require('../icons/img1.png')}
                                    text="Ana Yemek"
                                    onPress={() => handleMenuItemPress(0)}
                                    highlighted={highlightedIndexMenuItem === 0}
                                />
                                <MenuItem1
                                    imageSource={require('../icons/img2.png')}
                                    text="Çorba"
                                    onPress={() => handleMenuItemPress(1)}
                                    highlighted={highlightedIndexMenuItem === 1}
                                />
                                <MenuItem1
                                    imageSource={require('../icons/img3.png')}
                                    text="Aperatif"
                                    onPress={() => handleMenuItemPress(2)}
                                    highlighted={highlightedIndexMenuItem === 2}
                                />
                                <MenuItem1
                                    imageSource={require('../icons/img4.png')}
                                    text="Tatlı"
                                    onPress={() => handleMenuItemPress(3)}
                                    highlighted={highlightedIndexMenuItem === 3}
                                />
                                <MenuItem1
                                    imageSource={require('../icons/img5.png')}
                                    text="Pizza"
                                    onPress={() => handleMenuItemPress(4)}
                                    highlighted={highlightedIndexMenuItem === 4}
                                />
                            </ScrollView>
                        </View>
                        <SearchBar />
                        <ScrollView style={{ marginTop: 10, height: 250 }}>
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#C1D0DA', marginHorizontal: 10, marginTop: 10, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Image source={require('../icons/img5.png')} style={{ marginHorizontal: 10, width: 80, height: 80, }} />

                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ color: '#3D4C5E' }}>Tavuk Izgara Şöleni</Text>
                                            <Text style={{ color: '#F4690B' }}>₺210</Text>
                                        </View>

                                        <Text style={{ fontSize: 13, width: 270, marginTop: 6, color: '#546881' }}>Tavuk But, Şiş, Pirzola, Baget, Baharatlı Patates Kızartması, Pilav, Biber, Acılı Ezme, Meşrubat ve Salata ile servis edilir.</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'space-evenly' }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/vect1.png')} style={{}} />
                                        <Text style={{ color: '#FF455B', marginHorizontal: 5, fontSize: 12 }}>Kcal: 190</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/vect2.png')} style={{}} />
                                        <Text style={{ color: '#F4690B', marginHorizontal: 5, fontSize: 12 }}>Protein: 26g</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        <Text style={{ color: '#019DE7', marginHorizontal: 5, fontSize: 12 }}>Yağ: 14g</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/vect3.png')} style={{}} />
                                        <Text style={{ color: '#3DBD41', marginHorizontal: 5, fontSize: 12 }}>Karb: 26g</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#C1D0DA', marginHorizontal: 10, marginTop: 20, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Image source={require('../icons/img6.png')} style={{ marginHorizontal: 10, width: 80, height: 80, }} />

                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ color: '#3D4C5E' }}>Köfte Tutkunu Menüsü</Text>
                                            <Text style={{ color: '#F4690B' }}>₺220</Text>
                                        </View>

                                        <Text style={{ fontSize: 13, width: 270, marginTop: 6, color: '#546881' }}>Izgara Köfte, Kaşarlı Köfte, Baharatlı Patates Kızartması, Pilav, Biber, Acılı Ezme, Meşrubat ve Salata ile servis edilir.</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'space-evenly' }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/vect1.png')} style={{}} />
                                        <Text style={{ color: '#FF455B', marginHorizontal: 5, fontSize: 12 }}>Kcal: 190</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/vect2.png')} style={{}} />
                                        <Text style={{ color: '#F4690B', marginHorizontal: 5, fontSize: 12 }}>Protein: 26g</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        <Text style={{ color: '#019DE7', marginHorizontal: 5, fontSize: 12 }}>Yağ: 14g</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../icons/vect3.png')} style={{}} />
                                        <Text style={{ color: '#3DBD41', marginHorizontal: 5, fontSize: 12 }}>Karb: 26g</Text>
                                    </View>

                                </View>

                            </View>

                        </ScrollView>
                    </View>
                )
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#C1D0DA',
        height: 50,
        width: 330,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
        color: '#000',
    },
    icon: {
        marginHorizontal: 10,
    },
    settingsContainer: {
        borderWidth: 2,
        borderColor: '#C1D0DA',
        height: 50,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 9
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    highlightedText: {
        color: 'white',
    },

    highlighted: {
        backgroundColor: '#F4A218',
        borderRadius: 20
    },
    highlighted1: {
        borderBottomWidth: 2,
        borderBottomColor: '#F4A218',
    },
    menuItem1: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
    },
    image1: {
        width: 115,
        height: 115
    },
    text1: {
        marginTop: 10
    },
    menuItem2: {
        padding: 1,
        marginHorizontal: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#F4A218',

    },
    text2: {
        fontSize: 12,
        padding: 5,
        paddingHorizontal: 15,

    },
    highlighted2: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#F4A218',
        borderWidth: 0,
    },
    notHighlighted: {
        borderBottomWidth: 1,
        borderWidth: 1,
        borderColor: '#F4A218',
        borderRadius: 10,
        alignItems: 'center'
    },
    notHighlightedText: {
        color: '#F4A218',
    },
    menuContainer1: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});

export default QrOkYiyecekButon;
