"use client";

import { PopoverExample } from "./PopoverExample";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.imageContainer}></div>
        <div className={styles.content}>
          <p>
            Curabitur et nisi imperdiet urna blandit rutrum. Nullam congue
            venenatis lorem quis dignissim. Cras sagittis sagittis magna ut
            laoreet. Donec vitae magna quis mi congue cursus et vitae orci.
            Phasellus eget magna eu nisl tempor condimentum. Phasellus bibendum
            orci leo, at pharetra dui facilisis eu. Sed interdum eros tristique
            neque congue, vitae tristique erat vulputate. Sed porta lacus id
            odio dapibus sodales dignissim vel ligula. Maecenas arcu elit,
            varius nec nulla efficitur, rutrum bibendum dolor.
          </p>

          <PopoverExample />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            Maecenas consectetur urna a placerat vehicula. In a nisi a turpis
            vulputate eleifend vel sit amet mi. Curabitur pharetra lobortis
            lacus. Etiam tortor erat, varius ac vestibulum non, porta nec est.
            Etiam risus mi, bibendum id vehicula faucibus, iaculis sed ex. Nam
            pharetra, enim et tincidunt tempus, massa nisl eleifend velit, quis
            gravida turpis ante tempor turpis. Maecenas ullamcorper at quam eget
            pharetra. Donec ut erat enim. Integer posuere risus ut massa
            placerat imperdiet. Maecenas suscipit libero quis dolor consequat,
            at dapibus enim fermentum.
          </p>

          <PopoverExample />
        </div>
        <div className={styles.imageContainer}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.imageContainer}></div>
        <div className={styles.content}>
          <p>
            Nam mattis mauris ipsum, ut egestas magna sollicitudin eget.
            Curabitur scelerisque ornare nisl ultrices interdum. Curabitur ac
            dictum sapien, sit amet facilisis turpis. Aenean feugiat lacus
            risus, et luctus dolor semper ac. Fusce consequat convallis sapien
            id sollicitudin. Curabitur in purus bibendum, pulvinar turpis eu,
            aliquam augue. Aliquam dignissim vulputate odio. Aenean sit amet
            nunc tortor. In vel venenatis turpis, quis viverra arcu. In
            consectetur sem ac risus rutrum porta. Cras blandit, arcu vel
            imperdiet pellentesque, metus metus egestas lectus, sed fermentum
            augue elit quis urna. Duis euismod leo posuere, iaculis leo lacinia,
            condimentum odio. Etiam consequat tortor ac velit fermentum, a
            pretium orci condimentum. Mauris eu eleifend orci, ut molestie arcu.
            Maecenas sit amet molestie leo, a pulvinar risus. Donec nec justo
            eget lorem aliquam aliquet.
          </p>

          <PopoverExample />
        </div>
      </div>
    </main>
  );
}
