<View styles ={styles.container}>

    <View style={styles.header}>
      <Image source={LogoImg} />

          <TouchableOpacity>
            <Feather name="arrow-left" size={28} color="#E02041" />
          </TouchableOpacity>
    </View>

    <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>moniquinha troxinha</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>120</Text>
    </View>

    <View styles={styles.contactBox}>
         <Text styles={styles.heroTitle}>Salve o dia!</Text>
         <Text styles={styles.heroTitle}>Seja o heroi desse caso.</Text>

         <Text styles={styles.heroDescription}>Entre em contato:</Text>

         <View styles={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={()=>{}}>
                <Text styles={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={()=>{}}>
                <Text styles={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
         </View>
    </View>
</View>